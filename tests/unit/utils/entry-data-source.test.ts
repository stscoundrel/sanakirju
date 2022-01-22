import entryDataSourceUtil from '../../../src/utils/entry-data-source';
import { entryFixture, entryFixtureMultipleMeanings } from '../fixtures/entry-fixtures.ts';

describe('Utils: entry data soruce', () => {
  test('Gets data source from an ordinary entry.', async () => {
    const result = entryDataSourceUtil.getEntryDataSource(entryFixture);

    const expected = {
      Headword: [
        'keilakko',
      ],
      SearchForm: [
        'keilakko',
      ],
      PartOfSpeechCtn: [
        {
          PartOfSpeech: [
            {
              display: [
                'no',
              ],
              freeValue: [
                'a.',
              ],
              value: [
                'adjective',
              ],
            },
          ],
        },
      ],
      GrammaticalNote: [
        {
          _: 'a.',
          display: [
            'yes',
          ],
        },
      ],
      Definition: [
        'kiikkerä.',
      ],
      ExampleBlock: [
        {
          ExampleCtn: [
            {
              Example: [
                ' keilak|ko, -an ~ -on. keilakko veneh (harv.). ',
              ],
              FreeTopic: [
                {
                  $: {
                    type: 'levikki',
                  },
                  GeographicalUsage: [
                    {
                      _: 'Säämäj',
                      $: {
                        freeType: 'pitäjä',
                        class: 'pitäjä',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(result).toEqual(expected);
  });

  test('Gets data source from a multipurpose, partial entry.', async () => {
    const partialEntry = entryFixtureMultipleMeanings.SenseGrp[0];
    const result = entryDataSourceUtil.getEntryDataSource(partialEntry);

    const expected = {
      $: {
        senseNumber: '1.',
      },
      Definition: [
        'kikattaa.',
      ],
      ExampleBlock: [
        {
          ExampleCtn: [
            {
              Example: [
                'kekettämällä nakroa. nakroa kekettöä. kekettäy nakroa',
              ],
              FreeTopic: [
                {
                  $: {
                    type: 'levikki',
                  },
                  GeographicalUsage: [
                    {
                      _: 'KiestinkiP',
                      $: {
                        freeType: 'pitäjä',
                        class: 'pitäjä',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(result).toEqual(expected);
  });
});
