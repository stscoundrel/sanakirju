import { hasProperty } from 'spyrjari';
import { RawExampleBlock, RawExample, RawEntry } from '../interfaces/raw-entries';
import { Definition, DictionaryEntry } from '../interfaces/entries';

/**
 * Examples come in many xml pieces.
 * Combine them to reasonable string.
 */
const formatExample = (example: RawExample): string => {
  let exampleString = '';
  const exampleArray: [string, Record<string, unknown>][] = Object.entries(example);

  for (const [key, value] of exampleArray) {
    if (key !== 'RangeOfApplication') {
      if (typeof value !== 'string') {
        exampleString = `${exampleString} ${value}`;
      }
    }
  }

  return exampleString;
};

/**
 * Check if entry has multiple definitions.
 */
const hasMultipleMeanings = (entry: RawEntry): boolean => {
  if (hasProperty(entry, 'SenseGrp')) {
    return true;
  }

  return false;
};

/**
 * Get meaning of word.
 */
const getMeaning = (entry: RawEntry) : string => {
  let data;

  if (hasProperty(entry, 'HeadwordCtn')) {
    data = entry.HeadwordCtn[0];
  } else {
    data = entry;
  }

  if (hasProperty(data, 'Definition')) {
    if (hasProperty(data.Definition[0], '_')) {
      return data.Definition[0]._;
    }

    if (hasProperty(data.Definition[0], 'SeeAlso')) {
      const type = data.Definition[0].SeeAlso[0].$.style;
      const ref = data.Definition[0].SeeAlso[0].Ptr[0]._;

      return `${type} ${ref}`;
    }

    if (typeof data.Definition[0] !== 'string') {
      /**
       * Definition is split to ridiculous pieces.
       * Combine like examples.
       */
      return formatExample(data.Definition[0]);
    }

    // console.log(data.Definition[0])

    return data.Definition[0];
  }

  return '';
};

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
 * Get examples from entry.
 */
const getExamples = (entry: RawEntry): string[] => {
  let data;

  if (hasProperty(entry, 'HeadwordCtn')) {
    data = entry.HeadwordCtn[0];
  } else {
    data = entry;
  }

  if (hasProperty(data, 'ExampleBlock')) {
    if (Array.isArray(data.ExampleBlock)) {
      const examples: string[] = [];

      /**
       * Get array of formatted example strings.
       */
      data.ExampleBlock.forEach((exampleData: RawExampleBlock) => {
        exampleData.ExampleCtn.forEach((example) => {
          examples.push(formatExample(example.Example[0]));
        });
      });

      return examples;
    }
  }

  return [];
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
const formatEntries = (data: Array<RawEntry>): Array<DictionaryEntry> => {
  const words: Array<DictionaryEntry> = data.map((entry) => formatEntry(entry));

  return words;
};

export default {
  formatEntries,
};
