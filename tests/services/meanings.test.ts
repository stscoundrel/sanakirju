import meaningService from '../../src/services/meanings';
import { entryFixture, entryFixtureMultipleMeanings } from './fixtures/entry-fixtures.ts';

describe('Meanings service', () => {
  test('Detects if entry has multiple meanings', async () => {
    const entry = entryFixture;

    const result1 = meaningService.hasMultipleMeanings(entry);
    const result2 = meaningService.hasMultipleMeanings(entryFixtureMultipleMeanings);

    expect(result1).toBeFalsy();
    expect(result2).toBeTruthy();
  });

  test('Gets meaning from an entry', async () => {
    const entry = entryFixture;

    // Simple entry.
    const result1 = meaningService.getMeaning(entry);

    // Complex entry. Pass single definition, simulating word service.
    const result2 = meaningService.getMeaning(entryFixtureMultipleMeanings.SenseGrp[0]);

    expect(result1).toBe('pelätä.');
    expect(result2).toBe('kikattaa.');
  });
});
