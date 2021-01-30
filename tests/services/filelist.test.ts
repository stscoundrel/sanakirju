import fileList from '../../src/services/fileList';

describe('FileList service', () => {
  test('Lists files in given folder', () => {
    const directories = [
      `${__dirname}/../../src/interfaces`,
      `${__dirname}/../../resources`,
    ];

    const expected = [
      `${__dirname}/../../src/interfaces/entries.ts`,
      `${__dirname}/../../src/interfaces/raw-entries.ts`,
      `${__dirname}/../../resources/xml`,
    ];
    const result = fileList.getAll(directories);

    expect(result).toEqual(expected);
  });
});
