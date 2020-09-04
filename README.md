# Sanakirju

Karelian - Finnish dictionary with over 90 000 words. Transforms hard-to-use data into easy-to-use format for Node.js. 

Sanakirju is a starting point that offers you the complete dataset as JSON. Use it as you like, perhaps as a website, app, twitter bot or however other way you see fit.

#### Examples:

- [Sanakirju Knex.js](https://github.com/stscoundrel/sanakirju-knex) - SQL with Knex.js
- [Sanakirju Objection.js](https://github.com/stscoundrel/sanakirju-objectionjs) - SQL with Objection.js.
- [Sanakirju MongoDB](https://github.com/stscoundrel/sanakirju-mongodb) - MongoDB with default driver.
- [Sanakirju Mongoose](https://github.com/stscoundrel/sanakirju-mongoose) - MongoDB with Mongoose.


### Install

`yarn add sanakirju`

### Usage

There are two ways to use Sanakirju. Both approaches give you the complete dataset for the dictionary. The first one is the recommended, fastest and most complete way.

#### Read from XML files.

All the dictionary entries are provided as CC BY 4.0 XML-dataset. Sanakirju scrapes this data from XML to JSON and returns the whole set.


```javascript
const sanakirju = require('sanakirju')

// Recommended: get data from xml.
const dictionary = await sanakirju.fromXml()

console.log(dictionary)
```

#### Scrape from online dictionary.

Use Puppeteer to scrape each word & definitions from online version of Karjalan Kielen Sanakirja. This approach is not recommended, as scraping 90 000 words from online dictionary is both slow and flaky. Process may be interrupted by internet failure either on your or dictionarys end. The data is in less-than-ideal html format, so the final data is also less complete than with the xml approach.

This Puppeteer approach was started before the xml dataset came to my attention. It is mostly a curiosity and an example of scraping dictionary using Puppeteer.

```javascript
const sanakirju = require('sanakirju')

// Scrape from online dictionary. Might take whole day.
const dictionary = await sanakirju.scrape()

console.log(dictionary)
```

### Sources.

Words & translations are from [Karjalan Kielen Sanakirja](http://kaino.kotus.fi/cgi-bin/kks/kks_etusivu.cgi) created by [Institute for the Languages of Finland](https://www.kotus.fi/en). The original material is licenced under [Creative Commons International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
