const constants = require('../../constants/scraper.js')

const { LIST, LOAD_MORE } = constants.WORDS_LINKS_DOM

/**
 * Get definitions for array of urls.
 */
const getWordsInArray = async (words, browser) => {
  const result = await Promise.all(
    words.map(async (word) => {
      const definition = await getDefinition(word, browser)
      return definition    
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
  // Open word page.
  console.log('going to url '+wordUrl)
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

  return word
  
}


module.exports = {
  getWordsInArray,
  getDefinition,
}
