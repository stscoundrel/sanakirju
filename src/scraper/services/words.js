const constants = require('../../constants/scraper.js')

const { LIST, LOAD_MORE } = constants.WORDS_LINKS_DOM

/**
 * Get words in sidebar list.
 * --> Get all visible words.
 * --> Click 'load more'
 * --> If new words, keep fetching.
 */
const getWords = async (page) => {
  let allWords = []
  let isDone = false

  while( ! isDone ) {
    const words = await getVisibleWords(page)
    console.log(words)
    // Initialize main array if empty.
    if( allWords.length === 0 ) {
      allWords = words
    } else {
      if( allWords[ allWords.length -1 ] !== words[ words.length -1 ] ) {
        allWords = allWords.concat(words)
      } else {
        isDone = true
        break
      }
    }

    await page.click(LOAD_MORE)
    await page.waitFor(500)

  }

  return allWords
}

const getVisibleWords = async (page) => {
  const words = await page.evaluate( (LIST) => {
    const words = []

    const wordList = Array.from(document.querySelectorAll(LIST))

    // Remove first & last -> they are navigations.
    wordList.shift()
    wordList.pop().href

    wordList.forEach( link => {
      console.log(link.innerHTML) 
      words.push(link.href)      
    })

    return words
  }, LIST)

  return words
}

module.exports = {
  getWords,
}