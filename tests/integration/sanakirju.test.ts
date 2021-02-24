import sanakirju from '../../src';

describe('Dictionary tests', () => {
  test('Reads correct amount of dictionary entries.', async () => {
    const result = await sanakirju.fromXML();

    expect(result.length).toEqual(88575);
  });

  test('An entry from dictionary is formatted expectedly.', async () => {
    const result = await sanakirju.fromXML();
    const entry = result[2011];

    const expected = {
      word: 'ehoittoa',
      definitions: [
        {
          definition: 'tarjota (tav. ruokapöydässä).',
          type: [],
          grammaticalNote: null,
          examples: [
            'ehotti piimöäh miula šyyvä',
            'sie ehoitettih kaikkie luaduu',
            'minä hänel ehoitin kaikkee syömisty, a häi yksikai ńi midä ei syönyh',
          ],
        },
        {
          definition: 'lahjoittaa.',
          type: [],
          grammaticalNote: null,
          examples: [
            'häi minule tädä luaduu ehoitti pluat́jan',
          ],
        },
        {
          definition: 'ällöttää, etoa.',
          type: [],
          grammaticalNote: null,
          examples: [
            'milma ku ehoittoa, ei sidä syömistä lasse',
          ],
        },
        {
          definition: 'ehdottaa.',
          type: [],
          grammaticalNote: null,
          examples: [
            'ehottoa',
            'ehottua',
          ],
        },
      ],
    };

    expect(entry).toEqual(expected);
  });
});
