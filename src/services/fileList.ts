import { readdirSync } from 'fs';
import { XML_FOLDERS } from '../constants/xml';

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
 * Get list of all files
 */
const getAll = (): string[] => {
  let files: string[] = [];

  for (let i = 0; i < XML_FOLDERS.length; i += 1) {
    files = files.concat(getFromFolder(XML_FOLDERS[i]));
  }

  return files;
};

export default {
  getAll,
};
