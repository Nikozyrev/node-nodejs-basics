import { readdir } from 'fs/promises';
import { hasAccess } from '../../helpers/hasAccess.js';

const list = async () => {
  const path = new URL(`./files`, import.meta.url);

  const isPathExists = await hasAccess(path);

  if (!isPathExists) throw new Error('FS operation failed');

  const files = await readdir(path);

  console.log(files.join('\n'));
};

await list();
