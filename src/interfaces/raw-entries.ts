export interface RawExample {
  RangeOfApplication: string;
}

export interface RawExampleCtn {
    Example: RawExample;
}

export interface RawExampleBlock {
    ExampleCtn: RawExampleCtn[];
}

export interface RawEntry {
  HeadwordCtn: RawEntry;
  SenseGrp: RawEntry[];
  Headword: string;
  Definition: string[];
  SeeAlso: string[];
  GrammaticalNote: string;
  PartOfSpeechCtn: string[];
  ExampleBlock: RawExampleBlock
}
