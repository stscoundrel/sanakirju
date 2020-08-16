const DICTIONARY_URL = 'http://kaino.kotus.fi/cgi-bin/kks/karjala.cgi'

const WORDS_LINKS_DOM = {
  LIST: '#hsanakonteksti a',
  LOAD_MORE: '#hsanakonteksti a:last-of-type',
}

const CONCURRENT_DEFS = 10

const PUPPETEER_CONF = {
  headless: false,
  slowMo: 250,
}

module.exports = {
  DICTIONARY_URL,
  WORDS_LINKS_DOM,
  CONCURRENT_DEFS,
  PUPPETEER_CONF,
}
