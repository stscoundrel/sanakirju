import { hasProperty } from 'spyrjari';
import { getEntryDataSource } from '../utils/entry-data-source';
import { formatExample } from './examples';

// Type definitions.
import { RawEntry } from '../interfaces/raw-entries';

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
 * Get meaning of word.
 */
export const getMeaning = (entry: RawEntry) : string => {
  const data = getEntryDataSource(entry);

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

    return data.Definition[0];
  }

  return '';
};

export default {
  hasMultipleMeanings,
  getMeaning,
};
