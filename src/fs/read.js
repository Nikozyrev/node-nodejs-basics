import { readFile } from 'fs/promises';
import { hasAccess } from '../../helpers/hasAccess.js';

const read = async () => {
  const path = new URL(`./files/fileToRead.txt`, import.meta.url);

  const isPathExists = await hasAccess(path);

  if (!isPathExists) throw new Error('FS operation failed');

  const content = await readFile(path, { encoding: 'utf8' });

  console.log(content);
};

await read();
