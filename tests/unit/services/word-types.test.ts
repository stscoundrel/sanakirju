import typeService from '../../../src/services/word-types';
import { entryFixture, entryFixtureMultipleMeanings, thirdEntry } from '../fixtures/entry-fixtures.ts';

describe('Word types service', () => {
  test('Gets word types from entries', async () => {
    const result1 = typeService.getType(entryFixture);
    const result2 = typeService.getType(entryFixtureMultipleMeanings);
    const result3 = typeService.getType(thirdEntry);

    expect(result1).toEqual(['adjective']);
    expect(result2).toEqual(['verb']);
    expect(result3).toEqual(['verb']);
  });
});
