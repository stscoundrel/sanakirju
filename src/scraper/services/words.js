const constants = require('../../constants/scraper.js')
const utils = require('../../utils/utils')

const { LIST, LOAD_MORE } = constants.WORDS_LINKS_DOM

/**
 * Get definitions for array of links.
 */
 const getDefinitionsFromLinks = async (links, browser) => {
   // Split results into smaller chunks.
  const wordLists = utils.chunkArray(links, 5)

  // Get words from individual chunks.
  const definitions = []

  for (let i = 0; i < wordLists.length; i++) {
    definitions.push( await getWordsInArray(wordLists[i], browser) )
  }

  const result = await Promise.all(definitions)

  // Turn into single dimension array.
  const data = result.reduce( (a, b) => a.concat(b))

  return data
 }

/**
 * Get definitions for array of urls.
 */
const getWordsInArray = async (words, browser) => {
  const result = await Promise.all(
    words.map(async (word) => {
      return await getDefinition(word, browser)
    })
  )

  return result
}

/**
 * Get word definition.
 * --> Visit word page.
 * --> Scrape data.
 */
const getDefinition = async (wordUrl, browser) => {

  const result = new Promise( async (resolve, reject) => {
    const page = await browser.newPage()

    await page.goto(wordUrl)

    // Scrape data.
    const word = await page.evaluate( async () => {
      const wordName = document.querySelector('.hakusana')
      const definition = document.querySelector('.selite')
      const type = document.querySelector('.sanaluokka')

      const data = {
        word: wordName ? wordName.innerHTML : null,
        definition: definition ? definition.innerHTML : null,
        type: type ? type.innerHTML : null,
      }

      console.log(data)

      return data
    })

    await page.close()

    resolve(word)
  })

  return result
  
}


module.exports = {
  getDefinitionsFromLinks,
  getWordsInArray,
  getDefinition,
}
