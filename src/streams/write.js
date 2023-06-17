import { createWriteStream } from 'fs';

const write = async () => {
  const path = new URL('./files/fileToWrite.txt', import.meta.url);
  const stream = createWriteStream(path);
  process.stdin.pipe(stream);
};

await write();
