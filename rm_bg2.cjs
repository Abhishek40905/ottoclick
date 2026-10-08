const { Jimp, intToRGBA, rgbaToInt } = require('jimp');

async function removeBackground(file) {
    try {
        const image = await Jimp.read(file);
        const targetColor = image.getPixelColor(0, 0); 
        const rgba = intToRGBA(targetColor);
        if (rgba.a === 0 || rgba.a < 10) {
            console.log('Skipping ' + file + ' - already transparent');
            return;
        }

        console.log('Processing ' + file + ' - bg color: rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + rgba.a + ')');
        const tolerance = 25; 
        
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            const diff = Math.abs(r - rgba.r) + Math.abs(g - rgba.g) + Math.abs(b - rgba.b);
            if (diff < tolerance * 3) {
                if (diff < (tolerance * 1.5)) {
                    this.bitmap.data[idx + 3] = 0; 
                } else {
                    const alphaRatio = (diff - tolerance * 1.5) / (tolerance * 1.5);
                    this.bitmap.data[idx + 3] = Math.floor(255 * alphaRatio);
                }
            }
        });

        await image.write(file);
        console.log('Saved transparent ' + file);
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
