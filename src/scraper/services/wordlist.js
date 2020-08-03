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

  while (!isDone) {
    const words = await getVisibleWords(page)

    // Initialize main array if empty.
    if (allWords.length === 0) allWords = words

    // Check if whole list is handled.
    if (isFinalEntry(allWords, words)) {
      isDone = true
      break
    }

    // Append found words to main arr.
    allWords = allWords.concat(words)

    // Load new set.
    await page.click(LOAD_MORE)
    await page.waitFor(500)
  }

  return allWords
}

/**
 * Check if is final entry.
 * Final:
 * -> same last word in both arrays.
 * -> not equal size eg. not first entry.
 */
const isFinalEntry = (previous, next) => {
  const hasSameLast = previous[previous.length - 1] === next[next.length - 1]
  const isNotFirstRound = previous.length !== next.length

  if (hasSameLast && isNotFirstRound) {
    return true
  }

  return false
}

const getVisibleWords = async (page) => {
  const words = await page.evaluate((LIST) => {
    const words = []

    const wordList = Array.from(document.querySelectorAll(LIST))

    // Remove first & last -> they are navigations.
    wordList.shift()
    wordList.pop().href

    wordList.forEach((link) => {
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
