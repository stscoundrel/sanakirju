const scrape = require('./src/scraper')
const xmlReader = require('./src/xml-reader')

const scraper = async () => {
  const result = await scrape()

  return result;
}

const fromXML = async () => {
  const result = await xmlReader()
  return result
}

module.exports = {
  scraper,
  fromXML,
}
