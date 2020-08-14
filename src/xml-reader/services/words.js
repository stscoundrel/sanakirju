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
    type: getType(entry),
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

/**
 * Get word type from entry data.
 * May have multiple types, like 'noun' and 'adjective'
 */
const getType = (entry) => {
  const data = entry.HeadwordCtn[0]

  if( data.hasOwnProperty('PartOfSpeechCtn') ) {
    if( Array.isArray(data.PartOfSpeechCtn) ) {
      return data.PartOfSpeechCtn.map(type => type.PartOfSpeech[0]['$'].value)
    }
  }

  return null
}

module.exports = {
  formatEntries,
}
