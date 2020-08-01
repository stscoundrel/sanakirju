const scrape = require('./src/scraper')

const scraper = async () => {
  result = await scrape()

  console.log(result)
}

scraper()
