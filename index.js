// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a short discription on your project',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'List the installation methods for your project, if any',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Discribe some of the usage for your project',
        name: 'usage',
    },
    {
        type: 'choice',
        message: 'Choose a License for your project',
        name: 'license',
        choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'Boost Software Liscense', 'Apache']
    },
    {
        type: 'input',
        message: 'List any developers that helped the project',
        name: 'contributers',
    },
    {
        type: 'input',
        message: 'Provide any test applications for your project here',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'userName',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.txt`, data, (err) => err ? console.log(err) : console.log('done!') );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prmopt(questions)
    .then(answers => {
        var rEADME = genMarkdown.generateMarkdown(answers)
        writeToFile(`${questions}`, rEADME)
    })
}

// Function call to initialize app
init();
