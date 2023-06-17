import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'fs/promises';
import { pipeline } from 'stream/promises';

const decompress = async () => {
  const srcPath = new URL('./files/archive.gz', import.meta.url);
  const destPath = new URL('./files/fileToCompress.txt', import.meta.url);
  const unzip = createUnzip();
  const source = createReadStream(srcPath);
  const destination = createWriteStream(destPath);

  try {
    await pipeline(source, unzip, destination);
    await rm(srcPath);
    console.log('File unpacked successfully.');
  } catch (error) {
    console.log('Some Error');
  }
};

await decompress();
