const scrape = require('./src/scraper')

const scraper = async () => {
  const result = await scrape()

  return result;
}

scraper()
