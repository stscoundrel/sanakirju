const filesService = require('./services/files.js')
const readerService = require('./services/reader.js')

const xmlReader = async () => {
  const files = filesService.getAll()

  const words = await readerService.readFiles(files)

  return words
}

module.exports = xmlReader
