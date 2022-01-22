import { hasProperty } from 'spyrjari';
import { getEntryDataSource } from '../utils/entry-data-source';

// Type definitions.
import { RawEntry } from '../interfaces/raw-entries';

const DISALLOWED_DEFINITION_KEYS = ['GeographicalUsage', 'PartOfSpeechCtn'];

/**
 * Check if entry has multiple definitions.
 */
export const hasMultipleMeanings = (entry: RawEntry): boolean => {
  if (hasProperty(entry, 'SenseGrp')) {
    return true;
  }

  return false;
};

/**
 * Examples come in many xml pieces.
 * Combine them to reasonable string.
 */
export const formatDefinition = (definition: Record<string, Record<string, unknown>>): string => {
  let definitionString = '';
  const definitionArray: [string, Record<string, unknown>][] = Object.entries(definition);

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of definitionArray) {
    if (!DISALLOWED_DEFINITION_KEYS.includes(key)) {
      if (typeof value === 'string') {
        definitionString = `${definitionString} ${value}`;
      }
    }
  }

  return definitionString.trim();
};

/**
 * Get meaning of word.
 */
export const getMeaning = (entry: RawEntry) : string => {
  const data = getEntryDataSource(entry);

  if (hasProperty(data, 'Definition')) {
    if (hasProperty(data.Definition[0], '_')) {
      return data.Definition[0]._.trim();
    }

    if (hasProperty(data.Definition[0], 'SeeAlso')) {
      const type = data.Definition[0].SeeAlso[0].style;
      const ref = data.Definition[0].SeeAlso[0].Ptr[0]._;

      return `${type} ${ref}`.trim();
    }

    if (typeof data.Definition[0] !== 'string') {
      /**
       * Definition is split to ridiculous pieces.
       * Combine like examples.
       */
      return formatDefinition(data.Definition[0]).trim();
    }

    return data.Definition[0].trim();
  }

  return '';
};

export default {
  hasMultipleMeanings,
  getMeaning,
};
