export const simpleExampleFixture = {
  _: '  pelkää. ',
  Fragment: [
    'em minä händy hykä ylen äjjäl, engo händy varoa',
  ],
};

export const complexExampleFixture = {
  _: ' ().  .  . ',
  Fragment: [
    'jo heän onkija typyttelöyve nenäšš‿on utusen ńiemen, peäššäkö šoaren terhellisen',
    'Lämmitä kyly utuni, Pian pirtti riuottele',
    "Kussakk' on utuni vyöllä Kesä uuhen uujuloista",
  ],
  RangeOfApplication: [
    {
      _: 'run.',
      $: { freeType: 'käyttöala', 'kotus:grouping': '27' },
    },
  ],
  GeographicalUsage: [
    {
      _: '(SKVR I 484a)',
      $: { freeType: 'lähde', class: 'lähde' },
      sub: ['1'],
    },
    {
      _: '(SKVR I 1679h)',
      $: { freeType: 'lähde', class: 'lähde' },
      sub: ['3'],
    },
  ],
};

export default {
  simpleExampleFixture,
};
