import { rename as fsRename } from 'fs/promises';
import { hasAccess } from '../../helpers/hasAccess.js';

const rename = async () => {
  const srcPath = new URL(`./files/wrongFilename.txt`, import.meta.url);
  const destPath = new URL(`./files/properFilename.md`, import.meta.url);

  const isSrcPathExists = await hasAccess(srcPath);
  const isDestPathExists = await hasAccess(destPath);

  if (!isSrcPathExists || isDestPathExists)
    throw new Error('FS operation failed');

  return await fsRename(srcPath, destPath);
};

await rename();
