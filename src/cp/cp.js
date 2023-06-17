import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
  const path = new URL('./files/script.js', import.meta.url);
  const command = `node ${fileURLToPath(path)}`;
  const childProcess = spawn(command, args, {
    shell: true,
    stdio: 'inherit',
  });
  return childProcess;
};

spawnChildProcess(['someArgument1', 'someArgument2']);
