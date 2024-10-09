window.addEventListener('load', event => {
  document.querySelectorAll('[data-module="govuk-country-and-territory-autocomplete"]').forEach(element => {
    openregisterLocationPicker({
      selectElement: document.querySelector('[data-module="govuk-country-and-territory-autocomplete"]'),
      defaultValue: element.value,
      name: element.name,
      url: '/plugin-assets/govuk-country-and-territory/scripts/location-autocomplete-graph.json'
    })
  })
})