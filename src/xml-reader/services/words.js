/**
 * Format dictionary entries.
 */
const formatEntries = (data) => {
  const words = data.map( entry => formatEntry(entry) )

  return words
}

const formatEntry = (entry) => {

  const word = {
    word: getWord(entry),
    // PartOfSpeechCtn: getPartOfSpeech(entry),
    // GrammaticalNote: data.GrammaticalNote,
    // Definition: data.Definition
  }

  // return entry.HeadwordCtn[0]
  return word
}

/**
 * Get main word from entry.
 */
const getWord = (entry) => {
  if( typeof entry.HeadwordCtn[0].Headword[0] === 'object'  ) {
    return entry.HeadwordCtn[0].Headword[0]['_']
  }

  return entry.HeadwordCtn[0].Headword[0]
}


module.exports = {
  formatEntries,
}
