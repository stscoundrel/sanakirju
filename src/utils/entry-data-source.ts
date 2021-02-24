import { hasProperty } from 'spyrjari';
import { RawEntry } from '../interfaces/raw-entries';

export const getEntryDataSource = (entry: RawEntry) : RawEntry => {
  if (hasProperty(entry, 'HeadwordCtn')) {
    return entry.HeadwordCtn[0];
  }

  return entry;
};

export default {
  getEntryDataSource,
};
