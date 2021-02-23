import { getType } from '../../src/services/word-types';
import { entryFixture, entryFixtureMultipleMeanings } from './fixtures/entry-fixtures.ts';

describe('Word types service', () => {
  test('Gets word types from entries', async () => {
    const result1 = getType(entryFixture);
    const result2 = getType(entryFixtureMultipleMeanings);

    expect(result1).toEqual([]); // This fixture has no defined type.
    expect(result2).toEqual(['verb']);
  });
});
