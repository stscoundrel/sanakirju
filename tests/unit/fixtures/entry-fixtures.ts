export const entryFixture = {
  $: {
    sortKey: '17473',
    identifier: 'keilakko',
  },
  HeadwordCtn: [
    {
      Headword: [
        'keilakko',
      ],
      SearchForm: [
        'keilakko',
      ],
      PartOfSpeechCtn: [
        {
          PartOfSpeech: [
            {

              display: ['no'],
              freeValue: ['a.'],
              value: ['adjective'],

            },
          ],
        },
      ],
      GrammaticalNote: [
        {
          _: 'a.',
          display: ['yes'],

        },
      ],
      Definition: [
        'kiikkerä.',
      ],
      ExampleBlock: [
        {
          ExampleCtn: [
            {
              Example: [
                ' keilak|ko, -an ~ -on. keilakko veneh (harv.). ',
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

              display: ['no'],
              freeValue: ['v.'],
              value: ['verb'],

            },
          ],
        },
      ],
      GrammaticalNote: [
        {
          _: 'v.',
          display: ['yes'],

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
                'kekettämällä nakroa. nakroa kekettöä. kekettäy nakroa',
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
                ' (midä kuuluu?) kuuluu kurjua, nägyy ńälgiä, vilu selläs, ńälgä mahas, itše keskel keketän. siel kekettää siellä olla kököttää. ',
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

              display: ['no'],
              freeValue: ['kaus.v.'],
              value: ['verb'],

            },
          ],
          Subcategorisation: [
            {
              _: 'kaus.',

              display: ['no'],

            },
          ],
        },
      ],
      GrammaticalNote: [
        {
          _: 'kaus.v.',

          display: ['yes'],

        },
      ],
      Definition: [
        {
          SeeAlso: [
            {

              style: 'kanta',

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
                'kirgai öngähytti.',
              ],
              FreeTopic: [
                {

                  type: 'levikki',

                  GeographicalUsage: [
                    {
                      _: 'Suoj',

                      freeType: 'pitäjä',
                      class: 'pitäjä',

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
