import headwordService from '../../../src/services/headwords';
import { entryFixture, entryFixtureMultipleMeanings, thirdEntry } from '../fixtures/entry-fixtures.ts';

describe('Headwords service', () => {
  test('Gets headwords from entries', async () => {
    const result1 = headwordService.getHeadWord(entryFixture);
    const result2 = headwordService.getHeadWord(entryFixtureMultipleMeanings);
    const result3 = headwordService.getHeadWord(thirdEntry);

    expect(result1).toEqual('keilakko');
    expect(result2).toEqual('keketteä');
    expect(result3).toEqual('önkähytteä');
  });
});
