import { hasProperty } from 'spyrjari';
import { getEntryDataSource } from '../utils/entry-data-source';

// Type defs.
import { RawEntry } from '../interfaces/raw-entries';

/**
 * Get word type from entry data.
 * May have multiple types, like 'noun' and 'adjective'
 */
export const getType = (entry: RawEntry): string[] => {
  const data = getEntryDataSource(entry);

  if (hasProperty(data, 'PartOfSpeechCtn')) {
    if (Array.isArray(data.PartOfSpeechCtn)) {
      return data.PartOfSpeechCtn.map((type) => type.PartOfSpeech[0].$.value);
    }
  }

  return [];
};

export default {
  getType,
};
