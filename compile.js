const fs = require('fs');
const path = require('path');

const dist = 'node_modules/govuk-country-and-territory-autocomplete/dist'

const paths = {
  js: {
    source: `${dist}/location-autocomplete.min.js`,
    destination: 'scripts/javascript.js'
  },
  json: {
    source: `${dist}/location-autocomplete-canonical-list.json`,
    destination: 'scripts/location-autocomplete-canonical-list.json'
  },
  graph: {
    source: `${dist}/location-autocomplete-graph.json`,
    destination: 'scripts/location-autocomplete-graph.json'
  },
  css: {
    source: `${dist}/location-autocomplete.min.css` ,
    destination: 'scss/styles.scss'
  }
}

const toCopy = Object.keys(paths)

toCopy.forEach(type => {
  console.log(`Copying ${type}...`)
  const sourcePath = path.resolve(__dirname, paths[type].source);
  const destinationPath = path.resolve(__dirname, paths[type].destination);
  fs.copyFileSync(sourcePath, destinationPath);
  console.log('Copied.')
})

console.log('Files copied successfully!');
