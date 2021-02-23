import exampleService from '../../src/services/examples';
import { entryFixture } from './fixtures/entry-fixtures.ts';
import { simpleExampleFixture, complexExampleFixture } from './fixtures/example-fixture.ts';

describe('Examples service', () => {
  test('Returns empty array if no examples in entry', async () => {
    const entry = { ...entryFixture, ExampleBlock: [] };

    const result = await exampleService.getExamples(entry);

    expect(result).toEqual([]);
  });

  test('Gets examples from entry', async () => {
    const entry = entryFixture;
    const expected = [
      'em minä händy hykä ylen äjjäl, engo händy varoa',
      'en hykä nennii miehii, tulgah hod́ viiži',
    ];

    const result = await exampleService.getExamples(entry);

    expect(result).toEqual(expected);
  });

  test('Formats simple example', async () => {
    const example = simpleExampleFixture;
    const expected = 'em minä händy hykä ylen äjjäl, engo händy varoa';

    const result = await exampleService.formatExample(example);

    expect(result).toEqual(expected);
  });

  test('Formats complex example', async () => {
    const example = complexExampleFixture;
    const expected = "jo heän onkija typyttelöyve nenäšš‿on utusen ńiemen, peäššäkö šoaren terhellisen,Lämmitä kyly utuni, Pian pirtti riuottele,Kussakk' on utuni vyöllä Kesä uuhen uujuloista";

    const result = await exampleService.formatExample(example);

    expect(result).toEqual(expected);
  });
});
