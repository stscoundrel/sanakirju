import { hasProperty } from 'spyrjari';
import { getEntryDataSource } from '../utils/entry-data-source';
import { RawExampleBlock, RawExample, RawEntry } from '../interfaces/raw-entries';

/**
 * Examples come in many xml pieces.
 * Combine them to reasonable string.
 */
export const formatExample = (example: RawExample): string | null => {
  const exampleParts: string[] = [];
  const exampleArray: [string, Record<string, unknown>][] = Object.entries(example);

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of exampleArray) {
    if (key === 'Fragment') {
      if (Array.isArray(value)) {
        value.forEach((subValue) => {
          if (typeof subValue === 'string') {
            exampleParts.push(subValue);
          } else {
            exampleParts.push(subValue._);
          }
        });
      }
    }
  }

  const examples = exampleParts.filter((part) => part.length > 0).join('. ');

  if (examples.length > 0) {
    return examples;
  }

  return null;
};

/**
 * Get examples from entry.
 */
export const getExamples = (entry: RawEntry): string[] => {
  const data = getEntryDataSource(entry);

  if (hasProperty(data, 'ExampleBlock')) {
    if (Array.isArray(data.ExampleBlock)) {
      const examples: string[] = [];

      /**
       * Get array of formatted example strings.
       */
      data.ExampleBlock.forEach((exampleData: RawExampleBlock) => {
        exampleData.ExampleCtn.forEach((example) => {
          const formattedExample = formatExample(example.Example[0]);

          if (formattedExample) {
            examples.push(formattedExample);
          }
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
