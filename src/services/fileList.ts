import { readdirSync } from 'fs';

/**
 * Fetch list of xml files in folder.
 */
const getFromFolder = (folder: string): string[] => {
  const files: string[] = [];

  readdirSync(folder).forEach((file) => {
    files.push(`${folder}/${file}`);
  });

  return files;
};

/**
 * Get list of all files in folders.
 */
const getAll = (folders: string[]): string[] => {
  let files: string[] = [];

  for (let i = 0; i < folders.length; i += 1) {
    files = files.concat(getFromFolder(folders[i]));
  }

  return files;
};

export default {
  getAll,
};
