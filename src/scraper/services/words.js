
/**
 * Get words by letter.
 * --> Click each word
 * --> Fetch word details
 */
const getWords = async (letter, page) => {

  const words = await page.evaluate( (letter) => {
    const wordLinks = []

    const wordList = Array.from(document.querySelectorAll('#hsanakonteksti a'))

    // Remove first & last -> they are navigations.
    wordList.shift()
    wordList.pop()

    wordList.forEach( link => {
      if( link.innerHTML.toUpperCase().startsWith(letter) ) {
        wordLinks.push(link.href)
      }
    })

    return wordLinks
  }, letter)

  console.log(words)
  return words
}

module.exports = {
  getWords,
}