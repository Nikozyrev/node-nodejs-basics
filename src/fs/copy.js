import { cp } from 'fs/promises';
import { hasAccess } from '../../helpers/hasAccess.js';

const copy = async () => {
  const srcPath = new URL(`./files`, import.meta.url);
  const destPath = new URL(`./files_copy`, import.meta.url);

  const isSrcPathExists = await hasAccess(srcPath);
  const isDestPathExists = await hasAccess(destPath);

  if (!isSrcPathExists || isDestPathExists)
    throw new Error('FS operation failed');

  return await cp(srcPath, destPath, { recursive: true });
};

await copy();
