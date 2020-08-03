const scraper = require('./services/scrape.js')

const scrape = async () => {
  const results = []

  const { browser, page } = await scraper.getBrowser()

  const words = await scraper.scrapeWords(page)

  scraper.closeBrowser(browser)

  return results
}

module.exports = scrape
