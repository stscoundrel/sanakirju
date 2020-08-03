const scraper = require('./services/scrape.js')
const wordList = require('./services/wordlist.js')
const words = require('./services/words.js')
const utils = require('../utils/utils')

const scrape = async () => {
  const results = []

  const { browser, page } = await scraper.getBrowser()

  // const wordLinks = await wordList.getWordLinks(page)

  const wordLinks = [
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=a&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=aa&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=aakkoa&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=aaloi&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ah&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahah&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahahah&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahahella&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahanta&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahas&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahashenkine&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahasl%C3%A4nt%C3%A4&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahava&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahavahko&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahavaine01&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahavaine02&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahavakala&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahavakas&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahavakkaine&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahavakkali&l=1',
    'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi?a=ahavakoittuo&l=1'
  ]

  // Split results into smaller chunks.
  const chunkedWordList = utils.chunkArray(wordLinks, 5)

  // Get words from individual chunks.
  const result = results.concat( await Promise.all(
      chunkedWordList.map(async (wordChunk) => {
        const definitions = await words.getWordsInArray(wordChunk, browser)
        return definitions
      })
    )
  )

  const definitions = result.reduce( (a, b) => a.concat(b))

  console.log(definitions)  

  scraper.closeBrowser(browser)

  return results
}

module.exports = scrape
