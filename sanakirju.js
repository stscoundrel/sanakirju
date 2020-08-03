const scrape = require('./src/scraper')

const scraper = async () => {
  const result = await scrape()

  console.log(result)
}

scraper()
