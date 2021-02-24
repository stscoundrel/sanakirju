import meaningService from '../../src/services/meanings';
import { entryFixture, entryFixtureMultipleMeanings, thirdEntry } from './fixtures/entry-fixtures.ts';

describe('Meanings service', () => {
  test('Detects if entry has multiple meanings', async () => {
    const result1 = meaningService.hasMultipleMeanings(entryFixture);
    const result2 = meaningService.hasMultipleMeanings(entryFixtureMultipleMeanings);
    const result3 = meaningService.hasMultipleMeanings(thirdEntry);

    expect(result1).toBeFalsy();
    expect(result2).toBeTruthy();
    expect(result3).toBeFalsy();
  });

  test('Gets meaning from an entry', async () => {
    const entry = entryFixture;

    // Simple entry.
    const result1 = meaningService.getMeaning(entry);

    // Complex entry. Pass single definition, simulating word service.
    const result2 = meaningService.getMeaning(entryFixtureMultipleMeanings.SenseGrp[0]);
    const result3 = meaningService.getMeaning(thirdEntry);

    expect(result1).toBe('pelätä.');
    expect(result2).toBe('kikattaa.');
    expect(result3).toBe('kanta → önkähteäkseh.');
  });
});
