import filesService from './services/fileList';
import readerService from './services/reader';
import wordService from './services/words';
import { RawEntry } from './interfaces/raw-entries';
import { DictionaryEntry } from './interfaces/entries';

export const fromXML = async () : Promise<DictionaryEntry[]> => {
  const files: string[] = filesService.getAll();
  const words: RawEntry[] = await readerService.readFiles(files);
  const entries: DictionaryEntry[] = wordService.formatEntries(words);

  return entries;
};

export default fromXML;
