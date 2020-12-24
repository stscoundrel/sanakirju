const xml2js = require('xml2js')
const { readFileSync } = require('fs')
const wordService = require('./words.js')


/**
 * Get json from list of xml files
 */
const readFiles = async (files) => {
  let allWords = []

  for (let i = 0; i < files.length; i++) {
    const content = await getFileContent(`${__dirname}/../xml/kksxml/${files[i]}`)
    const words = await getWords(content)

    allWords = allWords.concat(words)
  }

  return allWords
}

/**
 * Read content of individual file.
 */
const getFileContent = async (filePath) => {
  const content = await readFileSync(filePath)

  return content
}

/**
 * Get words from file content.
 */
const getWords = async (content) => {
  const parser = new xml2js.Parser()

  const data = await parser.parseStringPromise(content)

  const words = wordService.formatEntries(data.Dictionary.DictionaryEntry)

  return words
}

/**
 * Format dictionary entries.
 */
const formatEntries = (data) => {
  const words = data.map((entry) => entry.HeadwordCtn[0])

  return words
}

module.exports = {
  readFiles,
}
