import { rm } from 'fs/promises';
import { hasAccess } from '../../helpers/hasAccess.js';

const remove = async () => {
  const path = new URL(`./files/fileToRemove.txt`, import.meta.url);

  const isFileExists = await hasAccess(path);

  if (!isFileExists) throw new Error('FS operation failed');

  return await rm(path);
};

await remove();
