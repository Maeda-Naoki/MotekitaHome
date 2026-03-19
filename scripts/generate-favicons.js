import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const input = join(publicDir, 'favicon.png');

async function generate() {
  const src = readFileSync(input);

  // 32x32 PNG (ブラウザタブ用)
  const png32 = await sharp(src)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();
  writeFileSync(join(publicDir, 'favicon-32x32.png'), png32);
  console.log(`favicon-32x32.png: ${png32.byteLength} bytes`);

  // 180x180 PNG (Apple Touch Icon)
  const png180 = await sharp(src)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(publicDir, 'favicon-180x180.png'), png180);
  console.log(`favicon-180x180.png: ${png180.byteLength} bytes`);

  console.log('Favicon generation complete.');
}

generate().catch(console.error);
