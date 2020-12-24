const scraper = require('./services/scrape.js')
const wordList = require('./services/wordlist.js')
const words = require('./services/words.js')

const scrape = async () => {
  const { browser, page } = await scraper.getBrowser()

  const wordLinks = await wordList.getWordLinks(page)

  const definitions = await words.getDefinitionsFromLinks(wordLinks, browser)

  scraper.closeBrowser(browser)

  return definitions
}

module.exports = scrape
