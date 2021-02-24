export interface RawExample {
  RangeOfApplication: string;
}

export interface RawExampleCtn {
    Example: RawExample;
}

export interface RawExampleBlock {
    ExampleCtn: RawExampleCtn[];
}

export interface RawDataSet {
  _ : string,
  $ : string,
}

export interface RawEntry {
  HeadwordCtn: RawEntry;
  SenseGrp: RawEntry[];
  Headword: string;
  Definition: RawDataSet;
  SeeAlso: string[];
  GrammaticalNote: RawDataSet;
  PartOfSpeechCtn: RawDataSet;
  ExampleBlock: RawExampleBlock
}
