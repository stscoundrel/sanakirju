/**
 * Format dictionary entries.
 */
const formatEntries = (data) => {
  const words = data.map((entry) => formatEntry(entry))

  return words
}

/**
 * Format individual entry.
 */
const formatEntry = (entry) => {
  const word = {
    word: getWord(entry),
    definitions: getDefinitions(entry),
  }

  // return entry
  return word
}

/**
 * Get definitions for word.
 * May have more than one, stored differently.
 */
const getDefinitions = (entry) => {
  const definitions = []

  if (hasMultipleMeanings(entry)) {
    /**
     * Group may or may not have definition.
     * Some are just usage examples.
     * Only return ones that have.
     */
    entry.SenseGrp.forEach((subEntry) => {
      if (subEntry.hasOwnProperty('Definition')) {
        definitions.push(getDefinition(subEntry))
      }
    })
  } else {
    definitions.push(getDefinition(entry))
  }
  return definitions
}

/**
 * Get definitions for single word.
 */
const getDefinition = (entry) => ({
  definition: getMeaning(entry),
  type: getType(entry),
  grammaticalNote: getGrammaticalNote(entry),
  examples: getExamples(entry),
})

/**
 * Check if entry has multiple definitions.
 */
const hasMultipleMeanings = (entry) => {
  if (entry.hasOwnProperty('SenseGrp')) {
    return true
  }

  return false
}

/**
 * Get main word from entry.
 */
const getWord = (entry) => {
  if (typeof entry.HeadwordCtn[0].Headword[0] === 'object') {
    return entry.HeadwordCtn[0].Headword[0]._
  }

  return entry.HeadwordCtn[0].Headword[0]
}

/**
 * Get meaning of word.
 */
const getMeaning = (entry) => {
  let data

  if (entry.hasOwnProperty('HeadwordCtn')) {
    data = entry.HeadwordCtn[0]
  } else {
    data = entry
  }

  if (data.hasOwnProperty('Definition')) {
    if (typeof data.Definition === 'object') {
      if (data.Definition[0].hasOwnProperty('_')) {
        return data.Definition[0]._
      } if (data.Definition[0].hasOwnProperty('SeeAlso')) {
        const type = data.Definition[0].SeeAlso[0].$.style
        const ref = data.Definition[0].SeeAlso[0].Ptr[0]._

        return `${type} ${ref}`
      }

      // return data.Definition[0]
    }

    return data.Definition
  }

  return null
}

/**
 * Get word type from entry data.
 * May have multiple types, like 'noun' and 'adjective'
 */
const getType = (entry) => {
  let data

  if (entry.hasOwnProperty('HeadwordCtn')) {
    data = entry.HeadwordCtn[0]
  } else {
    data = entry
  }

  if (data.hasOwnProperty('PartOfSpeechCtn')) {
    if (Array.isArray(data.PartOfSpeechCtn)) {
      return data.PartOfSpeechCtn.map((type) => type.PartOfSpeech[0].$.value)
    }
  }

  return null
}

/**
 * Get grammatical note from entry.
 * Apparently extra info on type.
 */
const getGrammaticalNote = (entry) => {
  let data

  if (entry.hasOwnProperty('HeadwordCtn')) {
    data = entry.HeadwordCtn[0]
  } else {
    data = entry
  }

  if (data.hasOwnProperty('GrammaticalNote')) {
    return data.GrammaticalNote[0]._
  }

  return null
}

/**
 * Get examples from entry.
 */
const getExamples = (entry) => {
  let data

  if (entry.hasOwnProperty('HeadwordCtn')) {
    data = entry.HeadwordCtn[0]
  } else {
    data = entry
  }

  if (data.hasOwnProperty('ExampleBlock')) {
    if (Array.isArray(data.ExampleBlock)) {
      const examples = []

      /**
       * Get array of formatted example strings.
       */
      data.ExampleBlock.forEach((exampleData) => {
        exampleData.ExampleCtn.forEach((example) => {
          examples.push(formatExample(example.Example[0]))
        })
      })

      return examples
    }
  }

  return []
}

/**
 * Examples come in many xml pieces.
 * Combine them to reasonable string.
 */
const formatExample = (example) => {
  let exampleString = ''

  for (const [key, value] of Object.entries(example)) {
    if( key !== 'RangeOfApplication') {
      if( typeof value !== 'string') {
        exampleString = `${exampleString} ${value}`
      }
    }  
  }

  return exampleString
}

module.exports = {
  formatEntries,
}
