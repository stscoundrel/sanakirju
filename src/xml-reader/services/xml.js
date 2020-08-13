const xml2js = require('xml2js')
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
xml2js.parseStringPromise = util.promisify(xml2js.parseString);
const { XML_FOLDERS } = require('../../constants/xml.js')

/**
 * Get json from list of xml files
 */
const readFiles = async (files) => {
  const words = []

  for (let i = 0; i < files.length; i++) {
    const parser = new xml2js.Parser()

    const content = await readFile(__dirname + '/../xml/kksxml/' + files[i])
   
    const result = await parser.parseStringPromise(content)  

    console.log(result.Dictionary.DictionaryEntry)
    return result.Dictionary.DictionaryEntry

    words.push(result)
  }

  return words
}

module.exports = {
  readFiles,
}
