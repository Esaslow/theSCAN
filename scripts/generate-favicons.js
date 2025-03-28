const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/icon.svg'));
  
  // Generate PNGs
  for (const { size, name } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, `../public/${name}`));
  }

  // Generate favicon.ico (16x16 and 32x32)
  const favicon16 = await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toBuffer();

  const favicon32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  // Create ICO file header
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(2, 4); // Number of images

  // Create ICO directory entries
  const dir16 = Buffer.alloc(16);
  dir16.writeUInt8(16, 0); // Width
  dir16.writeUInt8(16, 1); // Height
  dir16.writeUInt32LE(favicon16.length, 8); // Size
  dir16.writeUInt32LE(22, 12); // Offset

  const dir32 = Buffer.alloc(16);
  dir32.writeUInt8(32, 0); // Width
  dir32.writeUInt8(32, 1); // Height
  dir32.writeUInt32LE(favicon32.length, 8); // Size
  dir32.writeUInt32LE(22 + favicon16.length, 12); // Offset

  // Combine all buffers
  const icoBuffer = Buffer.concat([
    header,
    dir16,
    dir32,
    favicon16,
    favicon32
  ]);

  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
}

generateFavicons().catch(console.error); 