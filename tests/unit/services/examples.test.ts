import exampleService from '../../../src/services/examples';
import { entryFixture } from '../fixtures/entry-fixtures.ts';
import { simpleExampleFixture, complexExampleFixture } from '../fixtures/example-fixture.ts';

describe('Examples service', () => {
  test('Gets examples from entry', async () => {
    const expected = [
      'keilak|ko, -an ~ -on. keilakko veneh',
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
    const expected = 'em minä händy hykä ylen äjjäl, engo händy varoa';

    const result = await exampleService.formatExample(example);

    expect(result).toEqual(expected);
  });

  test('Formats complex example', async () => {
    const example = complexExampleFixture;
    const expected = "jo heän onkija typyttelöyve nenäšš‿on utusen ńiemen, peäššäkö šoaren terhellisen. Lämmitä kyly utuni, Pian pirtti riuottele. Kussakk' on utuni vyöllä Kesä uuhen uujuloista";

    const result = await exampleService.formatExample(example);

    expect(result).toEqual(expected);
  });
});
