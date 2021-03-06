// Type defs.
import { hasProperty } from 'spyrjari';
import { RawEntry } from '../interfaces/raw-entries';

/**
 * Get headword from entry.
 */
export const getHeadWord = (entry: RawEntry): string => {
  if (hasProperty(entry, 'HeadwordCtn')) {
    if (typeof entry.HeadwordCtn[0].Headword[0] === 'object') {
      return entry.HeadwordCtn[0].Headword[0]._;
    }
  }

  return entry.HeadwordCtn[0].Headword[0];
};

export default {
  getHeadWord,
};
