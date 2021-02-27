import { existsSync } from 'fs';
import xmlConstants, { XML_FOLDERS } from '../../../src/constants/xml';

describe('XML folder constants', () => {
  test('All constant paths are valid folders', async () => {
    const folders = [...xmlConstants.XML_FOLDERS, ...XML_FOLDERS];

    expect(folders.length > 0).toBeTruthy();

    folders.forEach((folder) => {
      expect(existsSync(folder)).toBeTruthy();
    });
  });
});
