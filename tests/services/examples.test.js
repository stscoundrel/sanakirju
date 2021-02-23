import exampleService from '../../src/services/examples';
import { entryFixture } from './examples/entry-fixture.js';
import { simpleExampleFixture, complexExampleFixture } from './examples/example-fixture.js';

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

  test('Formats simple example', async () => {
    const example = simpleExampleFixture;
    const expected = 'em minä händy hykä ylen äjjäl, engo händy varoa';

    const result = await exampleService.formatExample(example);

    expect(result).toEqual(expected);
  });

  test('Formats comples example', async () => {
    const example = complexExampleFixture;
    const expected = "jo heän onkija typyttelöyve nenäšš‿on utusen ńiemen, peäššäkö šoaren terhellisen,Lämmitä kyly utuni, Pian pirtti riuottele,Kussakk' on utuni vyöllä Kesä uuhen uujuloista";

    const result = await exampleService.formatExample(example);

    expect(result).toEqual(expected);
  });
});
