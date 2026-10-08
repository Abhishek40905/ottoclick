const { Jimp } = require('jimp');

async function removeBackground(file) {
    try {
        const image = await Jimp.read(file);
        
        const bg = { r: 247, g: 246, b: 240 };
        const tolerance = 25; 
        let transparentPixels = 0;
        
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            const a = this.bitmap.data[idx + 3];

            // If it's already fully or mostly transparent, do nothing
            if (a < 10) return;

            const diff = Math.abs(r - bg.r) + Math.abs(g - bg.g) + Math.abs(b - bg.b);
            
            // Check if it's the black edge bar specifically for lock-series-1-pro.png
            if (x < 15 && file.includes('lock-series-1-pro')) {
               const darkDiff = Math.abs(r - 28) + Math.abs(g - 28) + Math.abs(b - 28);
               if (darkDiff < 50) {
                   this.bitmap.data[idx + 3] = 0; // Make the dark bar transparent
                   return;
               }
            }
            // Check for black edge on the right of glass g1
            if (x > image.bitmap.width - 20 && file.includes('lock-glass-g1')) {
               const darkDiff = Math.abs(r - 35) + Math.abs(g - 35) + Math.abs(b - 35);
               if (darkDiff < 50) {
                   this.bitmap.data[idx + 3] = 0; // Make the dark bar transparent
                   return;
               }
            }

            if (diff < tolerance * 3) {
                if (diff < (tolerance * 1.5)) {
                    this.bitmap.data[idx + 3] = 0; 
                    transparentPixels++;
                } else {
                    const alphaRatio = (diff - tolerance * 1.5) / (tolerance * 1.5);
                    this.bitmap.data[idx + 3] = Math.floor(255 * alphaRatio);
                }
            }
        });

        await image.write(file);
        console.log('Saved transparent ' + file + ' (' + transparentPixels + ' pixels modified)');
    } catch (err) {
        console.error('Error processing ' + file + ':', err.message);
    }
}

const files = [
    'public/products/catalog/lock-series-1-pro.png',
    'public/products/catalog/lock-glass-g1.png',
    'public/products/catalog/curtain-track-oc-nct.png',
    'public/products/catalog/blind-motor-35m.png',
    'public/products/catalog/retrofit-oc-sls-4g.png',
    'public/products/catalog/retrofit-oc-sls-2g.png',
    'public/products/catalog/retrofit-oc-sls-4gz.png',
    'public/products/catalog/retrofit-oc-sls-1g.png'
];

async function run() {
    for (let f of files) {
        await removeBackground(f);
    }
}
run();
