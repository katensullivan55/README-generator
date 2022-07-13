const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        type: 'input',
        message: 'What is you',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description for your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How would you run/install your project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please describe how your project should be used.',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license would you like to give your project?',
        name: 'license',
        choices: [
            'Apache',
            'BSD 3',
            'Creative Commons',
            'MIT',
            'Zlib'
        ]
    },
    {
        type: 'input',
        message: 'Who contributed to the project and how can others contribute?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'How do you run your tests for this project?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your preferred contact e-mail address?',
        name: 'email'
    },
]

inquirer.prompt(questions)
.then(function(answers){
    generateReadMe(answers)
});

const tempSpot = path.join(__dirname, 'src','README-template.md')
const portSpot = path.join(__dirname,'README.md')

function generateReadMe(answers){
    const readmeTemp = fs.readFileSync(tempSpot, 'utf-8')
    
    let newReadme = readmeTemp.replace('{{title}}',answers.title)
    .replace('{{description}}',answers.description)
    .replace('{{install}}',answers.install)
    .replace('{{usage}}',answers.usage)
    .replace('{{contributing}}',answers.contributing)
    .replace('{{test}}',answers.test)
    .replace('{{github}}',answers.github)
    .replace('{{email}}',answers.email)
    
    if (answers.license === 'MIT'){
        newReadme = newReadme.replace('{{badge}}','![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)')
        .replace('{{license}}',answers.license + ': Permissive free license software. Please visit https://opensource.org/licenses/MIT for more information.')
    } else if (answers.license === 'Apache'){
        newReadme = newReadme.replace('{{badge}}','![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)')
        .replace('{{license}}',answers.license + ': Permissive free license software. Please visit https://www.apache.org/licenses/LICENSE-2.0 for more information.')
    } else if (answers.license === 'BSD 3'){
        newReadme = newReadme.replace('{{badge}}','![GitHub license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)')
        .replace('{{license}}',answers.license + ': Low restriction license type that does not have requirements on redistribution. Please visit https://opensource.org/licenses/BSD-3-Clause for more information.')
    } else if (answers.license === 'Creative Commons'){
        newReadme = newReadme.replace('{{badge}}','![GitHub license](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)')
        .replace('{{license}}',answers.license + ': Public copyright license that enables free distribution of a copyrighted work as long as credit is given. Please visit https://creativecommons.org/licenses/ for more information.')
    } else if (answers.license === 'Zlib'){
        newReadme = newReadme.replace('{{badge}}','![GitHub license](https://img.shields.io/badge/License-Zlib-lightgrey.svg)')
        .replace('{{license}}',answers.license + ': Permissive free license software. Please visit https://opensource.org/licenses/Zlib for more information.')
    }
        
    fs.writeFileSync(portSpot, newReadme)
}