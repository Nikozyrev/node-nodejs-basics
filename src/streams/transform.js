import { Transform } from 'stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const transformedData = chunk
        .toString()
        .trim()
        .split('')
        .reverse()
        .join('');
      callback(null, transformedData + '\n');
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
