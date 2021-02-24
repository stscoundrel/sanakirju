import { getGrammaticalNote } from '../../src/services/grammatical-note';
import { entryFixture, entryFixtureMultipleMeanings } from './fixtures/entry-fixtures.ts';

describe('Grammatical note service', () => {
  test('Gets grammar notes from entries', async () => {
    const result1 = getGrammaticalNote(entryFixture);
    const result2 = getGrammaticalNote(entryFixtureMultipleMeanings);

    expect(result1).toBeNull(); // This fixture has no grammar note.
    expect(result2).toEqual('v.');
  });
});
