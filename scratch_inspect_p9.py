import fitz

doc = fitz.open('Master_Catalogue_compressed.pdf')
p9 = doc[8]
print("=== PAGE 9 TEXT ===")
for b in p9.get_text('blocks'):
    print(b[:4], b[4].strip().replace('\n', ' '))
print("\n=== PAGE 9 IMAGES ===")
for img in p9.get_images():
    xref = img[0]
    meta = doc.extract_image(xref)
    rects = p9.get_image_rects(xref)
    print(f"xref {xref}: {meta['width']}x{meta['height']}, rects={rects}")
