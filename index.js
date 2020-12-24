const xmlReader = require('./src/xml-reader')

const fromXML = async () => {
  const result = await xmlReader()
  return result
}

module.exports = {
  fromXML,
}
