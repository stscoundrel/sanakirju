import { getDefinitions } from './definitions';
import { getHeadWord } from './headwords';

// Type defs.
import { RawEntry } from '../interfaces/raw-entries';
import { DictionaryEntry } from '../interfaces/entries';

/**
 * Format individual entry.
 */
const formatEntry = (entry: RawEntry): DictionaryEntry => {
  const word: DictionaryEntry = {
    word: getHeadWord(entry),
    definitions: getDefinitions(entry),
  };

  return word;
};

/**
 * Format dictionary entries.
 */
const formatEntries = (data: RawEntry[]): DictionaryEntry[] => {
  const words: DictionaryEntry[] = data.map((entry) => formatEntry(entry));

  return words;
};

export default {
  formatEntries,
};
