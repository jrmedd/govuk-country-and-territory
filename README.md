# GOV.UK prototype kit notifications plugin

A basic implementation of the [govuk-country-and-territory-autocomplete](https://github.com/alphagov/govuk-country-and-territory-autocomplete) component for use in the GOV.UK prototype kit.


## Installation

To install, open a terminal window within your prototype and run `npm install govuk-country-and-territory`.

## Usage

To use a within your prototype:
* Insert `{{ govukCountryAndTerritory() }}` anywhere in your prototype.
* To use a custom label or ID use `{{ govukCountryAndTerritory({ "id": "custom-id", "label": { "text": "Custom label" } }) }}`


## Updating

To update, go to `http://localhost:3000/manage-prototype/plugins-installed` and hit the update button.
