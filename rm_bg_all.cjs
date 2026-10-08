const { Jimp } = require('jimp'); const fs = require('fs'); const path = require('path');

async function processDir(dir) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
    let modifiedCount = 0;
    
    for (let f of files) {
        // Skip canvas textures
        if (f.startsWith('canvas-')) continue;
        
        try {
            const file = path.join(dir, f);
            const image = await Jimp.read(file);
            
            const bg = { r: 247, g: 246, b: 240 };
            const tolerance = 25; 
            let transparentPixels = 0;
            
            // Check top-left pixel to see if it's the catalog background
            const tl = Jimp.intToRGBA(image.getPixelColor(0, 0));
            const isBg = Math.abs(tl.r - bg.r) + Math.abs(tl.g - bg.g) + Math.abs(tl.b - bg.b) < tolerance * 3;
            
            // If the corner isn't the catalog background, skip to avoid destroying good images
            if (!isBg && !file.includes('lock-series-1-pro') && !file.includes('lock-glass-g1')) continue;

            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
                const r = this.bitmap.data[idx + 0];
                const g = this.bitmap.data[idx + 1];
                const b = this.bitmap.data[idx + 2];
                const a = this.bitmap.data[idx + 3];

                if (a < 10) return;

                const diff = Math.abs(r - bg.r) + Math.abs(g - bg.g) + Math.abs(b - bg.b);

                if (diff < tolerance * 3) {
                    if (diff < (tolerance * 1.5)) {
                        this.bitmap.data[idx + 3] = 0; 
                        transparentPixels++;
                    } else {
                        const alphaRatio = (diff - tolerance * 1.5) / (tolerance * 1.5);
                        this.bitmap.data[idx + 3] = Math.floor(255 * alphaRatio);
                        transparentPixels++;
                    }
                }
            });

            if (transparentPixels > 0) {
                await image.write(file);
                console.log('Saved transparent ' + file + ' (' + transparentPixels + ' pixels)');
                modifiedCount++;
            }
        } catch (err) {
            // ignore
        }
    }
    console.log('Total modified: ' + modifiedCount);
}

processDir('public/products/catalog');
