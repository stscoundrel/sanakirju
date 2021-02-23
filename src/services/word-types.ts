import { hasProperty } from 'spyrjari';

// Type defs.
import { RawEntry } from '../interfaces/raw-entries';

/**
 * Get word type from entry data.
 * May have multiple types, like 'noun' and 'adjective'
 */
export const getType = (entry: RawEntry): string[] => {
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

  return [];
};

export default {
  getType,
};
