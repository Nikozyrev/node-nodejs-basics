import { writeFile } from 'fs/promises';
import { hasAccessToFile } from '../../helpers/hasAccessToFile.js';

const create = async () => {
  const name = 'fresh.txt';
  const content = 'I am fresh and young';

  const path = new URL(`./files/${name}`, import.meta.url);

  const isFileExists = await hasAccessToFile(path);

  if (isFileExists) throw new Error('FS operation failed');

  return await writeFile(path, content);
};

await create();
