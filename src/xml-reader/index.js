const fs = require('fs')
const xml2js = require('xml2js')

const xmlReader = async () => {
  const results = []

  const parser = new xml2js.Parser()

  const result = await fs.readFile(__dirname + '/xml/kksxml/kks1/01_a.xml', function(err, data) {
    console.log(data)

      parser.parseString(data, function (err, result) {
          console.dir(result.Dictionary.DictionaryEntry)
          console.log('Done')
      });
  });

  console.log(result)

  return results
}

module.exports = xmlReader
