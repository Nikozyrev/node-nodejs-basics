import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'fs/promises';
import { pipeline } from 'stream/promises';

const compress = async () => {
  const srcPath = new URL('./files/fileToCompress.txt', import.meta.url);
  const destPath = new URL('./files/archive.gz', import.meta.url);
  const gzip = createGzip();
  const source = createReadStream(srcPath);
  const destination = createWriteStream(destPath);

  try {
    await pipeline(source, gzip, destination);
    await rm(srcPath);
    console.log('File archived successfully.');
  } catch (error) {
    console.log('Some Error');
  }
};

await compress();
