import exampleService from '../../src/services/examples';
import { entryFixture } from './examples/entry-fixture.js';

describe('Examples service', () => {
  test('Gets examples from entry', async () => {
    const entry = entryFixture;
    const expected = [
      'em minä händy hykä ylen äjjäl, engo händy varoa',
      'en hykä nennii miehii, tulgah hod́ viiži',
    ];

    const result = await exampleService.getExamples(entry);

    expect(result).toEqual(expected);
  });
});
