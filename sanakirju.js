const util = require('util')
const scrape = require('./src/scraper')
const xmlReader = require('./src/xml-reader')

const scraper = async () => {
  const result = await scrape()

  return result;
}

const fromXML = async () => {
  const result = await xmlReader()

  // console.log(result[0].SenseGrp)

  // result.forEach(result => result.definitions.forEach(def => console.log(def.examples)) )

  // console.log(result)

  console.log(util.inspect(result, false, null))

  return result
}

fromXML()
