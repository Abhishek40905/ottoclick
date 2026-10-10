
from PIL import Image, ImageDraw
import glob
import os

files = glob.glob('public/products/catalog/luxe-*.png')
for f in files:
    if f.endswith('.test.png'): continue
    try:
        img = Image.open(f).convert('RGBA')
        w, h = img.size
        # Flood fill from 4 corners
        ImageDraw.floodfill(img, xy=(0, 0), value=(0, 0, 0, 0), thresh=30)
        ImageDraw.floodfill(img, xy=(w-1, 0), value=(0, 0, 0, 0), thresh=30)
        ImageDraw.floodfill(img, xy=(0, h-1), value=(0, 0, 0, 0), thresh=30)
        ImageDraw.floodfill(img, xy=(w-1, h-1), value=(0, 0, 0, 0), thresh=30)
        
        # Save to overwrite original
        img.save(f)
        print(f'Processed {f}')
        
        # Remove backup
        if os.path.exists(f + '.test.png'):
            os.remove(f + '.test.png')
    except Exception as e:
        print(f'Error on {f}: {e}')

