import { getDefinitions, getDefinition } from '../../src/services/definitions';
import { entryFixture, entryFixtureMultipleMeanings, thirdEntry } from '../fixtures/entry-fixtures.ts';

describe('Definition service', () => {
  test('Gets definitions from an entry', async () => {
    const result1 = getDefinition(entryFixture);
    const result2 = getDefinition(thirdEntry);

    const expected1 = {
      definition: 'kiikkerä.',
      examples: [
        'keilak|ko, -an ~ -on. keilakko veneh',
      ],
      grammaticalNote: 'a.',
      type: [
        'adjective',
      ],
    };

    const expected2 = {
      definition: 'kanta → önkähteäkseh.',
      examples: [
        'kirgai öngähytti.',
      ],
      grammaticalNote: 'kaus.v.',
      type: [
        'verb',
      ],
    };

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
  });

  test('Gets definitions from an array of  entries', async () => {
    const result = getDefinitions(entryFixtureMultipleMeanings);

    const expected = [
      {
        definition: 'kikattaa.',
        type: [],
        grammaticalNote: null,
        examples: [
          'kekettämällä nakroa. nakroa kekettöä. kekettäy nakroa',
        ],
      },
      {
        definition: 'kököttää.',
        type: [],
        grammaticalNote: null,
        examples: [
          '(midä kuuluu?) kuuluu kurjua, nägyy ńälgiä, vilu selläs, ńälgä mahas, itše keskel keketän. siel kekettää',
        ],
      },
    ];

    expect(result).toEqual(expected);
  });
});
