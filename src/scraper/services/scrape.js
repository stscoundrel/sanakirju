const puppeteer = require('puppeteer')
const constants = require('../../constants/scraper.js')

const { DICTIONARY_URL, PUPPETEER_CONF } = constants

/**
 * Bootstrap Puppeteer
 * browser & page instances.
 */
const getBrowser = async () => {
  const browser = await puppeteer.launch(PUPPETEER_CONF)
  const page = await browser.newPage()

  await page.goto(DICTIONARY_URL)

  return { browser, page };
}

/**
 * Close puppeteer browser.
 */
const closeBrowser = async (browser) => browser.close()

module.exports = {
  getBrowser,
  closeBrowser,
}
