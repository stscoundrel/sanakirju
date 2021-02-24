export const entryFixture = {
  $: {
    senseNumber: '2.',
  },
  Definition: [
    'pelätä.',
  ],
  ExampleBlock: [
    {
      ExampleCtn: [
        {
          Example: [
            {
              _: '  pelkää. ',
              Fragment: [
                'em minä händy hykä ylen äjjäl, engo händy varoa',
              ],
            },
          ],
          FreeTopic: [
            {
              $: {
                type: 'levikki',
              },
              GeographicalUsage: [
                {
                  _: 'Säämäj',
                  $: {
                    freeType: 'pitäjä',
                    class: 'pitäjä',
                  },
                },
              ],
            },
          ],
        },
        {
          Example: [
            {
              _: ' . ',
              Fragment: [
                'en hykä nennii miehii, tulgah hod́ viiži',
              ],
            },
          ],
          FreeTopic: [
            {
              $: {
                type: 'levikki',
              },
              GeographicalUsage: [
                {
                  _: 'Nek-Riip',
                  $: {
                    freeType: 'pitäjä',
                    class: 'pitäjä',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const entryFixtureMultipleMeanings = {
  $: {
    sortKey: '17567',
    identifier: 'keketteä',
  },
  HeadwordCtn: [
    {
      Headword: [
        'keketteä',
      ],
      SearchForm: [
        'keketteä',
      ],
      PartOfSpeechCtn: [
        {
          PartOfSpeech: [
            {
              $: {
                display: 'no',
                freeValue: 'v.',
                value: 'verb',
              },
            },
          ],
        },
      ],
      GrammaticalNote: [
        {
          _: 'v.',
          $: {
            display: 'yes',
          },
        },
      ],
    },
  ],
  SenseGrp: [
    {
      $: {
        senseNumber: '1.',
      },
      Definition: [
        'kikattaa.',
      ],
      ExampleBlock: [
        {
          ExampleCtn: [
            {
              Example: [
                {
                  _: ' . ',
                  Fragment: [
                    'kekettämällä nakroa. nakroa kekettöä. kekettäy nakroa',
                  ],
                },
              ],
              FreeTopic: [
                {
                  $: {
                    type: 'levikki',
                  },
                  GeographicalUsage: [
                    {
                      _: 'KiestinkiP',
                      $: {
                        freeType: 'pitäjä',
                        class: 'pitäjä',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      $: {
        senseNumber: '2.',
      },
      Definition: [
        'kököttää.',
      ],
      ExampleBlock: [
        {
          ExampleCtn: [
            {
              Example: [
                {
                  _: '  siellä olla kököttää. ',
                  Fragment: [
                    '(midä kuuluu?) kuuluu kurjua, nägyy ńälgiä, vilu selläs, ńälgä mahas, itše keskel keketän. siel kekettää',
                  ],
                },
              ],
              FreeTopic: [
                {
                  $: {
                    type: 'levikki',
                  },
                  GeographicalUsage: [
                    {
                      _: 'Suistamo',
                      $: {
                        freeType: 'pitäjä',
                        class: 'pitäjä',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const thirdEntry = {
  $: {
    sortKey: '88327',
    identifier: 'önkähytteä',
  },
  HeadwordCtn: [
    {
      Headword: [
        'önkähytteä',
      ],
      SearchForm: [
        'önkähytteä',
      ],
      PartOfSpeechCtn: [
        {
          PartOfSpeech: [
            {
              $: {
                display: 'no',
                freeValue: 'kaus.v.',
                value: 'verb',
              },
            },
          ],
          Subcategorisation: [
            {
              _: 'kaus.',
              $: {
                display: 'no',
              },
            },
          ],
        },
      ],
      GrammaticalNote: [
        {
          _: 'kaus.v.',
          $: {
            display: 'yes',
          },
        },
      ],
      Definition: [
        {
          SeeAlso: [
            {
              $: {
                style: 'kanta',
              },
              Ptr: [
                {
                  _: '→ önkähteäkseh.',
                  $: {
                    'xlink:href': 'önkähteäkseh',
                  },
                },
              ],
            },
          ],
        },
      ],
      ExampleBlock: [
        {
          ExampleCtn: [
            {
              Example: [
                {
                  Fragment: [
                    'kirgai öngähytti.',
                  ],
                },
              ],
              FreeTopic: [
                {
                  $: {
                    type: 'levikki',
                  },
                  GeographicalUsage: [
                    {
                      _: 'Suoj',
                      $: {
                        freeType: 'pitäjä',
                        class: 'pitäjä',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default {
  entryFixture,
};
