import wordService from '../../../src/services/words';
import { entryFixture, entryFixtureMultipleMeanings, thirdEntry } from '../fixtures/entry-fixtures.ts';

describe('Word service', () => {
  test('Formats individual entries', async () => {
    const result1 = wordService.formatEntry(entryFixture);
    const result2 = wordService.formatEntry(thirdEntry);

    const expected1 = {
      word: 'keilakko',
      definitions: [
        {
          definition: 'kiikkerä.',
          examples: [
            'keilak|ko, -an ~ -on. keilakko veneh',
          ],
          grammaticalNote: 'a.',
          type: [
            'adjective',
          ],
        },
      ],
    };

    const expected2 = {
      word: 'önkähytteä',
      definitions: [
        {
          definition: 'kanta → önkähteäkseh.',
          examples: [
            'kirgai öngähytti.',
          ],
          grammaticalNote: 'kaus.v.',
          type: [
            'verb',
          ],
        },
      ],
    };

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
  });

  test('Formats a multiple meaning entry.', async () => {
    const result = wordService.formatEntries([entryFixtureMultipleMeanings]);

    const expected = [
      {
        word: 'keketteä',
        definitions: [
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
        ],
      },
    ];

    expect(result).toEqual(expected);
  });

  test('Formats an array of entries.', async () => {
    const result = wordService.formatEntries(
      [entryFixture, entryFixtureMultipleMeanings, thirdEntry],
    );

    const expected = [
      {
        word: 'keilakko',
        definitions: [
          {
            definition: 'kiikkerä.',
            examples: [
              'keilak|ko, -an ~ -on. keilakko veneh',
            ],
            grammaticalNote: 'a.',
            type: [
              'adjective',
            ],
          },
        ],
      },
      {
        word: 'keketteä',
        definitions: [
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
        ],
      },
      {
        word: 'önkähytteä',
        definitions: [
          {
            definition: 'kanta → önkähteäkseh.',
            examples: [
              'kirgai öngähytti.',
            ],
            grammaticalNote: 'kaus.v.',
            type: [
              'verb',
            ],
          },
        ],
      },
    ];

    expect(result).toEqual(expected);
  });
});
