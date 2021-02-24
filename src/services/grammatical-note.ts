import { hasProperty } from 'spyrjari';
import { getEntryDataSource } from '../utils/entry-data-source';

// Type definitions.
import { RawEntry } from '../interfaces/raw-entries';

/**
 * Get grammatical note from entry.
 * Apparently extra info on type.
 */
export const getGrammaticalNote = (entry: RawEntry): string | null => {
  const data = getEntryDataSource(entry);

  if (hasProperty(data, 'GrammaticalNote')) {
    return data.GrammaticalNote[0]._;
  }

  return null;
};

export default {
  getGrammaticalNote,
};
