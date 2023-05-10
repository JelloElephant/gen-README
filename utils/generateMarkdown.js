// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '') {
    return ''
  } else if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == 'GNU AGPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license == 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == 'Boost Software Liscense') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license == 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === '') {
    return ''
  } else if (license == 'MIT') {
    return `[MIT Licsnse](https://choosealicense.com/licenses/mit/)`
  } else if (license == 'GNU AGPLv3') {
    return `[GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/)`
  } else if (license == 'GNU GPLv3') {
    return `[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if (license == 'Boost Software Liscense') {
    return `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`
  } else if (license == 'Apache') {
    return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return ''
  } else {
    renderLicenseBadge(license)
    renderLicenseLink(license)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}


## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.contributers}

## License
${renderLicenseSection(data.license)}

## Tests
${data.tests}

## Questions
${data.userName}

`;
}

module.exports = generateMarkdown;
