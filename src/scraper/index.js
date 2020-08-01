const scraperService = require('./services/scrape.js')
const letterService = require('./services/letters.js')

const scrape = async () => {
  const results = []

  const {browser, page} = await scraperService.getBrowser()
  //const letters = letterService.getLetters()
  const letters = ['E']

  await letters.forEach( async letter => {
    const words = await scraperService.getWordsByLetter(letter, page)

    results.push(words)
  })

  // scraperService.closeBrowser(browser)

  return results
}


module.exports = scrape
