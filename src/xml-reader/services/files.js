const fs = require('fs')
const { XML_FOLDERS } = require('../../constants/xml.js')

/**
 * Get list of all files
 */
const getAll = () => {
  let files = []

  for (let i = 0; i < XML_FOLDERS.length; i++) {
    files = files.concat(getFromFolder(XML_FOLDERS[i]))
  }

  return files
}

/**
 * Fetch list of xml files in folder.
 */
const getFromFolder = (folder) => {
  const files = []

  fs.readdirSync(`${__dirname}/../xml/kksxml/${folder}/`).forEach((file) => {
    files.push(file)
  })

  return files
}

module.exports = {
  getAll,
}
