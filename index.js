// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for userResponses
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'katensullivan55',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'README-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description, is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "List the steps to install your project for the (Installation):",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Please provide instructions and examples of your project in use (Usage):",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Please provide guidelines on how other developers can contribute to your project:",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Please list any tests written for your app and provide examples:",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MIT', 'ISC', 'Apache', 'none'],
        name: 'license'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('${fileName}.md', generateMarkdown(data), err => {
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