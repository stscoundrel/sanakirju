const filesService = require('./services/files.js')
const xmlService = require('./services/xml.js')

const xmlReader = async () => {
  const files = filesService.getAll()

  const words = await xmlService.readFiles(files)

  // const parser = new xml2js.Parser()

  // const result = await fs.readFile(__dirname + '/xml/kksxml/kks1/01_a.xml', function(err, data) {
  //   parser.parseString(data, function (err, result) {
  //       //console.dir(result.Dictionary.DictionaryEntry)
  //       //console.log('Done')
  //   });
  // });
  
  return words
}

module.exports = xmlReader
