const scrape = require('./src/scraper')
const xmlReader = require('./src/xml-reader')

const scraper = async () => {
  const result = await scrape()

  return result;
}

const fromXML = async () => {
  const result = await xmlReader()

  // console.log(result[0].SenseGrp)

  // console.log( result.forEach(result => result.definitions.forEach(def => console.log(result.word, def))) )

  console.log(result)


  return result
}

fromXML()
