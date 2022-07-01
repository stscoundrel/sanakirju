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


#### Read from XML files.

All the dictionary entries are provided as CC BY 4.0 XML-dataset. Sanakirju scrapes this data from XML to JSON and returns the whole set.


```javascript
const sanakirju = require('sanakirju')

// Get dataset from xml.
const dictionary = await sanakirju.fromXML()

console.log(dictionary)
```


### Sources.

Words & translations are from [Karjalan Kielen Sanakirja](http://kaino.kotus.fi/cgi-bin/kks/kks_etusivu.cgi) created by [Institute for the Languages of Finland](https://www.kotus.fi/en). The original material is licenced under [Creative Commons International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

The data format of the original entries has been altered by [Sanakirju Simplifier](https://github.com/stscoundrel/sanakirju-simplifier) tool
