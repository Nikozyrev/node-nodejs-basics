import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const path = new URL(`./files/fileToCalculateHashFor.txt`, import.meta.url);

  const fileBuffer = await readFile(path);

  const hashSum = createHash('sha256');
  hashSum.update(fileBuffer);

  const hex = hashSum.digest('hex');

  console.log(hex);
};

await calculateHash();
