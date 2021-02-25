/* eslint-disable no-await-in-loop */
import xml2js from 'xml2js';
import { readFileSync } from 'fs';
import { RawEntry } from '../interfaces/raw-entries';

/**
 * Read content of individual file.
 */
const getFileContent = async (filePath: string) => {
  const content = await readFileSync(filePath);

  return content;
};

/**
 * Get words from file content.
 */
const getWords = async (content: Buffer) : Promise<RawEntry[]> => {
  const parser = new xml2js.Parser({ mergeAttrs: true, preserveChildrenOrder: true });

  const data = await parser.parseStringPromise(content);

  const words: RawEntry[] = data.Dictionary.DictionaryEntry;

  return words;
};

/**
 * Get json from list of xml files
 */
const readFiles = async (filePaths: string[]): Promise<RawEntry[]> => {
  let allWords: RawEntry[] = [];

  for (let i = 0; i < filePaths.length; i += 1) {
    const content = await getFileContent(filePaths[i]);
    const words = await getWords(content);

    allWords = allWords.concat(words);
  }

  return allWords;
};

export default {
  readFiles,
};
