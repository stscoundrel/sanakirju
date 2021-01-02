import { hasProperty } from 'spyrjari';
import { RawExampleBlock, RawExample, RawEntry } from '../interfaces/raw-entries';

/**
 * Examples come in many xml pieces.
 * Combine them to reasonable string.
 */
export const formatExample = (example: RawExample): string => {
  let exampleString = '';
  const exampleArray: [string, Record<string, unknown>][] = Object.entries(example);

  for (const [key, value] of exampleArray) {
    if (key !== 'RangeOfApplication') {
      if (typeof value !== 'string') {
        exampleString = `${exampleString} ${value}`;
      }
    }
  }

  return exampleString;
};

/**
 * Get examples from entry.
 */
export const getExamples = (entry: RawEntry): string[] => {
  let data;

  if (hasProperty(entry, 'HeadwordCtn')) {
    data = entry.HeadwordCtn[0];
  } else {
    data = entry;
  }

  if (hasProperty(data, 'ExampleBlock')) {
    if (Array.isArray(data.ExampleBlock)) {
      const examples: string[] = [];

      /**
       * Get array of formatted example strings.
       */
      data.ExampleBlock.forEach((exampleData: RawExampleBlock) => {
        exampleData.ExampleCtn.forEach((example) => {
          examples.push(formatExample(example.Example[0]));
        });
      });

      return examples;
    }
  }

  return [];
};

export default {
  getExamples,
  formatExample,
};
