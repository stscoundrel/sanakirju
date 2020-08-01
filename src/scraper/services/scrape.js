const puppeteer = require('puppeteer')
const constants = require('../../constants/scraper.js')
const words = require('./words.js')

const { DICTIONARY_URL } = constants


/**
 * Bootstrap Puppeteer
 * browser & page instances.
 */
const getBrowser = async () => {
  const browser = await puppeteer.launch({headless: false,slowMo: 250})
  const page = await browser.newPage()

  await page.goto(DICTIONARY_URL)

  return {browser, page};
}

/**
 * Close puppeteer browser.
 */
const closeBrowser = async (browser) => {
  return await browser.close()
}


/**
 * Get words by letter.
 * Scraper dictionary page for each word & definition.
 */
const scrapeWords = async (letter, page) => {
  // Get individual words
  const wordlist = await words.getWords(letter, page)

  console.log(wordlist)
}

module.exports = {
  getBrowser,
  closeBrowser,
  scrapeWords
}
