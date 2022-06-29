// returns a license badge based on which license is passed in - if there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if(license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
  if(license === 'Apache') {
    return '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if(license === 'none') {
    return ''
  }
}

// returns the license link - if there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)'
  }
  if(license === 'ISC') {
    return '[ISC](https://opensource.org/licenses/ISC)'
  }
  if(license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)'
  }
  if(license === 'none') {
    return ''
  }
}

// returns the license section of README - if there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none') {
    return ''
  }
  else {
    return '##${license}
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
