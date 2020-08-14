const xml2js = require('xml2js')
const fs = require('fs')
const util = require('util')

// Promisify xml reader.
const readFile = util.promisify(fs.readFile)
xml2js.parseStringPromise = util.promisify(xml2js.parseString);


const { XML_FOLDERS } = require('../../constants/xml.js')

/**
 * Get json from list of xml files
 */
const readFiles = async (files) => {
  let allWords = []

  for (let i = 0; i < files.length; i++) {

    const content = await getFileContent(__dirname + '/../xml/kksxml/' + files[i])
    const words = await getWords(content)

    allWords = allWords.concat(words)
  }

  return allWords
}

/**
 * Read content of individual file.
 */
const getFileContent = async (filePath) => {
  const content = await readFile(filePath)

  return content
}

/**
 * Get words from file content.
 */
 const getWords = async (content) => {    
    const parser = new xml2js.Parser()

    const data = await parser.parseStringPromise(content)  

    const words = formatEntries(data.Dictionary.DictionaryEntry)

    return words
 }

/**
 * Format dictionary entries.
 */
const formatEntries = (data) => {
  const words = data.map( entry => entry.HeadwordCtn[0] )

  return words
}

module.exports = {
  readFiles,
}
