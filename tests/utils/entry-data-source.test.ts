import { getEntryDataSource } from '../../src/utils/entry-data-source';
import { entryFixture, entryFixtureMultipleMeanings } from '../fixtures/entry-fixtures.ts';

describe('Utils: entry data soruce', () => {
  test('Gets data source from an ordinary entry.', async () => {
    const result = getEntryDataSource(entryFixture);

    const expected = {
      Definition: ['kiikkerä.'], ExampleBlock: [{ ExampleCtn: [{ Example: [{ Fragment: ['keilak|ko, -an ~ -on. keilakko veneh'], RangeOfApplication: [{ $: { freeType: 'käyttöala', 'kotus:grouping': '8' }, _: 'harv.' }], _: '  (). ' }], FreeTopic: [{ $: { type: 'levikki' }, GeographicalUsage: [{ $: { class: 'pitäjä', freeType: 'pitäjä' }, _: 'Säämäj' }] }] }] }], GrammaticalNote: [{ $: { display: 'yes' }, _: 'a.' }], Headword: ['keilakko'], PartOfSpeechCtn: [{ PartOfSpeech: [{ $: { display: 'no', freeValue: 'a.', value: 'adjective' } }] }], SearchForm: ['keilakko'],
    };

    expect(result).toEqual(expected);
  });

  test('Gets data source from a multipurpose, partial entry.', async () => {
    const partialEntry = entryFixtureMultipleMeanings.SenseGrp[0];
    const result = getEntryDataSource(partialEntry);

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
                {
                  _: ' . ',
                  Fragment: [
                    'kekettämällä nakroa. nakroa kekettöä. kekettäy nakroa',
                  ],
                },
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
