// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// questions for user input
const questions = [
    //github username
    {
    name: 'githubuser',
    type: 'input',
    message: 'What is your github username?'
    },
    // repo title
    {
    name: 'title',
    type: 'input',
    message: 'Enter the title of your project'
    },
    // description of repo
    {
    name: 'description',
    type: 'input',
    message: 'Describe your project - what purpose does it serve, what would a user want to get out of it, etc'
    },
    // installation
    {
    name: 'installation',
    type: 'input',
    message: 'Leave instructions for the user to install or implement project'
    },
    // usage
    {
    name: 'usage',
    type: 'input',
    message: 'How can this project be used?'
    },
    // contribute
    {
    name: 'contribute',
    type: 'input',
    message: 'Give instructions for coders who want to contribute'
    },
    // tests
    {
    name: 'tests',
    type: 'input',
    message: 'What tests were run?'
    },
    // license
    {
    name: 'license',
    type: 'list',
    message: 'Which license did you choose',
    choices: ['MIT', 'ISC', 'Apache', 'none']
    },
    // email
    {
    name: 'email',
    type: 'input',
    message: 'Please input yourt email'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('README.md has been generated');
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        });
}

// function call to initialize app
init();