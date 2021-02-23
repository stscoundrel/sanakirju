import meaningService from '../../src/services/meanings';
import { entryFixture, entryFixtureMultipleMeanings } from './fixtures/entry-fixtures.js';

describe('Meanings service', () => {
  test('Detects if entry has multiple meanings', async () => {
    const entry = entryFixture;

    const result1 = await meaningService.hasMultipleMeanings(entry);
    const result2 = await meaningService.hasMultipleMeanings(entryFixtureMultipleMeanings);

    expect(result1).toBeFalsy();
    expect(result2).toBeTruthy();
  });
});
