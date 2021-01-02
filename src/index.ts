import filesService from './services/fileList';
import readerService from './services/reader';
import { DictionaryEntry } from './interfaces/entries';

export const fromXML = async () : Promise<DictionaryEntry[]> => {
  const files: string[] = filesService.getAll();
  const words: DictionaryEntry[] = await readerService.readFiles(files);
  return words;
};

export default fromXML;
