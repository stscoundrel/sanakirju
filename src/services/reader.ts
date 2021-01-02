import xml2js from 'xml2js';
import { readFileSync } from 'fs';
import { DictionaryEntry } from '../interfaces/entries';
import wordService from './words.js';

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
const getWords = async (content: Buffer) : Promise<DictionaryEntry[]> => {
  const parser = new xml2js.Parser();

  const data = await parser.parseStringPromise(content);

  const words: DictionaryEntry[] = wordService.formatEntries(data.Dictionary.DictionaryEntry);

  return words;
};

/**
 * Get json from list of xml files
 */
const readFiles = async (filePaths: string[]): Promise<DictionaryEntry[]> => {
  let allWords: DictionaryEntry[] = [];

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
