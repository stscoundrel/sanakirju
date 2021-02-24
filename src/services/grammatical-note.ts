import { hasProperty } from 'spyrjari';

// Type definitions.
import { RawEntry } from '../interfaces/raw-entries';

/**
 * Get grammatical note from entry.
 * Apparently extra info on type.
 */
export const getGrammaticalNote = (entry: RawEntry): string | null => {
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

export default {
  getGrammaticalNote,
};
