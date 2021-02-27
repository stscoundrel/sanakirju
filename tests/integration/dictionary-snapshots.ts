import sanakirjuModule from '../../src';

const dictionarySnapshotTests = (sanakirju: typeof sanakirjuModule) : void => {
  describe('Dictionary content snapshot tests', () => {
    test('RawEntry data is as expected.', async () => {
      const result = await sanakirju.getRawDictionary();

      expect(result.slice(0, 100)).toMatchSnapshot();
    });

    test('Formatted dictionary data is as expected.', async () => {
      const result = await sanakirju.getDictionary();

      expect(result.slice(0, 100)).toMatchSnapshot();
    });
  });
};

export default dictionarySnapshotTests;
