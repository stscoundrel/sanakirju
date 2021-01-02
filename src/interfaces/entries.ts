export interface Definition {
  definition: string;
  type: string;
  grammaticalNote: string | null;
  examples: string[];
}

export interface DictionaryEntry {
  word: string;
  definitions: Definition[];
}
