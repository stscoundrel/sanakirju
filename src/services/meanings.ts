import { hasProperty } from 'spyrjari';
import { RawEntry } from '../interfaces/raw-entries';
import { formatExample } from './examples';

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

    return data.Definition[0];
  }

  return '';
};

export default {
  hasMultipleMeanings,
  getMeaning,
};
