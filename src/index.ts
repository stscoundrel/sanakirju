import filesService from './services/fileList';
import readerService from './services/reader';
import wordService from './services/words';
import { XML_FOLDERS } from './constants/xml';
import { RawEntry } from './interfaces/raw-entries';
import { DictionaryEntry } from './interfaces/entries';

export const getRawDictionary = async () : Promise<RawEntry[]> => {
  const files: string[] = filesService.getAll(XML_FOLDERS);
  const words: RawEntry[] = await readerService.readFiles(files);

  return words;
};

export const fromXML = async () : Promise<DictionaryEntry[]> => {
  const words: RawEntry[] = await getRawDictionary();
  const entries: DictionaryEntry[] = wordService.formatEntries(words);

  return entries;
};

export const getDictionary = async () : Promise<DictionaryEntry[]> => {
  const entries = await fromXML();

  return entries;
};

export default {
  getRawDictionary,
  getDictionary,
  fromXML,
};
