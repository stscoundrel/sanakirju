import exampleService from '../../../src/services/examples';
import { entryFixture } from '../fixtures/entry-fixtures.ts';
import { simpleExampleFixture, complexExampleFixture } from '../fixtures/example-fixture.ts';

describe('Examples service', () => {
  test('Gets examples from entry', async () => {
    const expected = [
      'keilak|ko, -an ~ -on. keilakko veneh (harv.).',
    ];

    const result = await exampleService.getExamples(entryFixture);

    expect(result).toEqual(expected);
  });

  test('Returns empty array if entry is malformatted', async () => {
    const entry = { ...entryFixture };
    entry.HeadwordCtn[0].ExampleBlock = undefined;

    const result = await exampleService.getExamples(entry);

    expect(result).toEqual([]);
  });

  test('Returns empty array if no examples in entry', async () => {
    const entry = { ...entryFixture };
    entry.HeadwordCtn[0].ExampleBlock = [];

    const result = await exampleService.getExamples(entry);

    expect(result).toEqual([]);
  });

  test('Formats simple example', async () => {
    const example = simpleExampleFixture;
    const expected = 'em minä händy hykä ylen äjjäl, engo händy varoa pelkää.';

    const result = await exampleService.formatExample(example);

    expect(result).toEqual(expected);
  });

  test('Formats complex example', async () => {
    const example = complexExampleFixture;
    const expected = 'Ruma Ruotus paitulainen Syöpiy juopi pöyän päässä, Päässä pöyän paiallaan, Aivin aivinaisillaan.';

    const result = await exampleService.formatExample(example);

    expect(result).toEqual(expected);
  });
});
