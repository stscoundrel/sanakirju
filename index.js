import xmlReader from './src';

const fromXML = async () => {
  const result = await xmlReader();
  return result;
};

module.exports = {
  fromXML,
};
