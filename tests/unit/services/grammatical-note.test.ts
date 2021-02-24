import { getGrammaticalNote } from '../../../src/services/grammatical-note';
import { entryFixture, entryFixtureMultipleMeanings, thirdEntry } from '../fixtures/entry-fixtures.ts';

describe('Grammatical note service', () => {
  test('Gets grammar notes from entries', async () => {
    const result1 = getGrammaticalNote(entryFixture);
    const result2 = getGrammaticalNote(entryFixtureMultipleMeanings);
    const result3 = getGrammaticalNote(thirdEntry);

    expect(result1).toEqual('a.');
    expect(result2).toEqual('v.');
    expect(result3).toEqual('kaus.v.');
  });
});
