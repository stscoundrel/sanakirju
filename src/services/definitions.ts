import { hasProperty } from 'spyrjari';
import { getExamples } from './examples';
import { hasMultipleMeanings, getMeaning } from './meanings';
import { getType } from './word-types';
import { getGrammaticalNote } from './grammatical-note';

// Type defs.
import { RawEntry } from '../interfaces/raw-entries';
import { Definition } from '../interfaces/entries';

/**
 * Get definitions for single word.
 */
export const getDefinition = (entry: RawEntry): Definition => ({
  definition: getMeaning(entry),
  type: getType(entry),
  grammaticalNote: getGrammaticalNote(entry),
  examples: getExamples(entry),
});

/**
 * Get definitions for word.
 * May have more than one, stored differently.
 */
export const getDefinitions = (entry: RawEntry): Definition[] => {
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

export default {
  getDefinition,
  getDefinitions,
};
