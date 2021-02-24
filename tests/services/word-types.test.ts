import { getType } from '../../src/services/word-types';
import { entryFixture, entryFixtureMultipleMeanings, thirdEntry } from './fixtures/entry-fixtures.ts';

describe('Word types service', () => {
  test('Gets word types from entries', async () => {
    const result1 = getType(entryFixture);
    const result2 = getType(entryFixtureMultipleMeanings);
    const result3 = getType(thirdEntry);

    expect(result1).toEqual([]); // This fixture has no defined type.
    expect(result2).toEqual(['verb']);
    expect(result3).toEqual(['verb']);
  });
});
