import { hasProperty } from 'spyrjari';
import { getExamples } from './examples';
import { hasMultipleMeanings, getMeaning } from './meanings';

// Type defs.
import { RawEntry } from '../interfaces/raw-entries';
import { Definition, DictionaryEntry } from '../interfaces/entries';

/**
 * Get word type from entry data.
 * May have multiple types, like 'noun' and 'adjective'
 */
const getType = (entry: RawEntry): string => {
  let data;

  if (hasProperty(entry, 'HeadwordCtn')) {
    data = entry.HeadwordCtn[0];
  } else {
    data = entry;
  }

  if (hasProperty(data, 'PartOfSpeechCtn')) {
    if (Array.isArray(data.PartOfSpeechCtn)) {
      return data.PartOfSpeechCtn.map((type) => type.PartOfSpeech[0].$.value);
    }
  }

  return '';
};

/**
 * Get grammatical note from entry.
 * Apparently extra info on type.
 */
const getGrammaticalNote = (entry: RawEntry): string | null => {
  let data;

  if (hasProperty(entry, 'HeadwordCtn')) {
    data = entry.HeadwordCtn[0];
  } else {
    data = entry;
  }

  if (hasProperty(data, 'GrammaticalNote')) {
    return data.GrammaticalNote[0]._;
  }

  return null;
};

/**
 * Get definitions for single word.
 */
const getDefinition = (entry: RawEntry): Definition => ({
  definition: getMeaning(entry),
  type: getType(entry),
  grammaticalNote: getGrammaticalNote(entry),
  examples: getExamples(entry),
});

/**
 * Get definitions for word.
 * May have more than one, stored differently.
 */
const getDefinitions = (entry: RawEntry): Definition[] => {
  const definitions: Definition[] = [];

  if (hasMultipleMeanings(entry)) {
    /**
     * Group may or may not have definition.
     * Some are just usage examples.
     * Only return ones that have.
     */
    entry.SenseGrp.forEach((subEntry: RawEntry) => {
      if (hasProperty(subEntry, 'Definition')) {
        definitions.push(getDefinition(subEntry));
      }
    });
  } else {
    definitions.push(getDefinition(entry));
  }
  return definitions;
};

/**
 * Get main word from entry.
 */
const getWord = (entry: RawEntry): string => {
  if (typeof entry.HeadwordCtn[0].Headword[0] === 'object') {
    return entry.HeadwordCtn[0].Headword[0]._;
  }

  return entry.HeadwordCtn[0].Headword[0];
};

/**
 * Format individual entry.
 */
const formatEntry = (entry: RawEntry): DictionaryEntry => {
  const word: DictionaryEntry = {
    word: getWord(entry),
    definitions: getDefinitions(entry),
  };

  // return entry
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
