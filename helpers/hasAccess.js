import { access } from 'fs/promises';

export const hasAccess = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};
