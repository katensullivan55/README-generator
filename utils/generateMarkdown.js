// returns a license badge based on which license is passed in - if there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
  if(license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
  }
  if(license === 'Apache') {
    return '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
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
    return 
    ' ${renderLicenseBadge(license)} ${renderLicenseLink(license)} '
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
    `# ${data.title}
    ${renderLicenseSection(data.license)}
    # Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contribute](#Contribute)
    * [Tests](#Tests)
    * [Email Me](#Email)
    * [Github](#Github)

    # Description

    ${data.description}

    # Installation

    ${data.installation}

    # Usage

    ${data.usage}

    # Contribute

    ${data.contribute}

    # Tests

    ${data.tests}

    # Email Me

    Contact me a ${data.email} with questions or suggestions

    # Github

    github.com/${data.githubuser}

`;
}

module.exports = generateMarkdown;
