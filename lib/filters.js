const { views } = require('govuk-prototype-kit')

function json(string) {
  const parsedJson = JSON.parse(string)
  return parsedJson
}

module.exports = {
  json
}

views.addFilter('json', json)
