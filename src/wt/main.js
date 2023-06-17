import { cpus } from 'os';
import { Worker } from 'worker_threads';

const executeWorker = (workerData) => {
  const path = new URL('./worker.js', import.meta.url);
  const worker = new Worker(path, { workerData });
  return new Promise((resolve) => {
    worker.on('message', ({ result }) =>
      resolve({ status: 'resolved', data: result })
    );
    worker.on('error', () => resolve({ status: 'error', data: null }));
  });
};

const performCalculations = async () => {
  const startNum = 10;
  const cpusArr = cpus();
  const result = await Promise.allSettled(
    cpusArr.map((_, i) => executeWorker({ n: startNum + i }))
  );
  console.log(result.map(({ value }) => value));
};

await performCalculations();
