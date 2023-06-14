import { access } from 'fs/promises';

export const hasAccessToFile = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};
