const constants = require('../../constants/scraper.js')
const utils = require('../../utils/utils')

const { LIST, LOAD_MORE } = constants.WORDS_LINKS_DOM
const { CONCURRENT_DEFS } = constants

/**
 * Get definitions for array of links.
 */
const getDefinitionsFromLinks = async (links, browser) => {
  // Split results into smaller chunks.
  const wordLists = utils.chunkArray(links, CONCURRENT_DEFS)

  // Get words from individual chunks.
  const definitions = []

  for (let i = 0; i < wordLists.length; i++) {
    definitions.push(await getWordsInArray(wordLists[i], browser))
  }

  const result = await Promise.all(definitions)

  // Turn into single dimension array.
  const data = result.reduce((a, b) => a.concat(b))

  return data
}

/**
 * Get definitions for array of urls.
 */
const getWordsInArray = async (words, browser) => {
  const result = await Promise.all(
    words.map(async (word) => await getDefinition(word, browser)),
  )

  return result
}

/**
 * Get word definition.
 * --> Visit word page.
 * --> Scrape data.
 */
const getDefinition = async (wordUrl, browser) => {
  const result = new Promise(async (resolve, reject) => {
    const page = await browser.newPage()

    await page.goto(wordUrl)

    // Scrape data.
    const word = await page.evaluate(async () => {
      /**
       * Main fields.
       */
      const wordName = document.querySelector('.hakusana')
      const definition = document.querySelector('.selite')
      const type = document.querySelector('.sanaluokka')
      const definitions = document.querySelectorAll('.merkitysryhma')
      const examples = []

      /**
       * Check additional definitions.
       * Some words have multiple meanings
       */
      if (definitions.length) {
        definitions.forEach((def) => {
          const definition = def.querySelector('.selite')
          const type = def.querySelector('.sanaluokka')
          examples.push({
            definition: definition ? definition.innerHTML.replace(/<[^>]*>?/gm, '') : null,
            type: type ? type.innerHTML.replace(/<[^>]*>?/gm, '') : null,
          })
        })
      }

      /**
       * Format bundle, remove html.
       */
      const data = {
        word: wordName ? wordName.innerHTML.replace(/<[^>]*>?/gm, '') : null,
        definition: definition ? definition.innerHTML.replace(/<[^>]*>?/gm, '') : null,
        type: type ? type.innerHTML.replace(/<[^>]*>?/gm, '') : null,
        definitions: examples || null,
      }

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
