const scraper = require('./services/scrape.js')

const scrape = async () => {
  const results = []

  const {browser, page} = await scraper.getBrowser()
  
  const words = await scraper.scrapeWords(page)    

  // scraperService.closeBrowser(browser)

  return results
}


module.exports = scrape
