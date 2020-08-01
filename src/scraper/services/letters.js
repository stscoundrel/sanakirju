const constants = require('../../constants/scraper.js')

const { LETTERS } = constants

/**
 * Get list of possible letters.
 */
const getLetters = () => {
  return LETTERS
}

/**
 * Get "letter link" to click.
 * Lets puppeteer click right filter.
 */
const getLetterLink = async (letter, page) => {
  const letterLink = await page.evaluate( (letter) => {
    let filterLink = ''

    let letters = Array.from(document.querySelectorAll('.aakkoslista a'))

    letters.forEach( link => {
      if( link.innerHTML === letter ) {
        filterLink = link.href
      }
    })

    return filterLink
  }, letter)

  return letterLink
}

module.exports = {
  getLetters,
  getLetterLink
}