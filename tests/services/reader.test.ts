import readerService from '../../src/services/reader';

describe('Reader service', () => {
  test('Reads xml to json', async () => {
    const files = [
      `${__dirname}/../../resources/xml/kksxml/kks1/01_a.xml`,
    ];

    const result = await readerService.readFiles(files);

    expect(result[0].HeadwordCtn[0].Headword[0]).toEqual('a');
    expect(result[1].HeadwordCtn[0].Headword[0]).toEqual('aa');
    expect(result[2].HeadwordCtn[0].Headword[0]).toEqual('aakkoa');
  });
});
