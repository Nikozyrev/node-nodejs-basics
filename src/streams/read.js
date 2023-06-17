import { createReadStream } from 'fs';

const read = async () => {
  const path = new URL('./files/fileToRead.txt', import.meta.url);
  const stream = createReadStream(path);
  stream.pipe(process.stdout);
};

await read();
