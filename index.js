// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a breif description on your application: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How to install your application: ',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Give a breif description on how to use your application: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What tests have you ran on your application: ',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Chose a license: ',
        name: 'license',
        choices: ['No License',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'Mozilla Public License 2.0']
    },
    {
        type: 'input',
        message: 'State how to contribute to your application: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter your github username: ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email: ',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(`${fileName}`, generateMarkdown(data), (err) =>
    (err ? console.log(err) : console.log('README.md file created!')))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            if (response.title == '' || response.description == '' || response.install == '' || response.usage == '' || response.test == '' || response.contribution == '' || response.github == '' || response.email == '') {
                console.log(`You can't leave any spots blank, please tyr again:`);
                init();
            } else {
                writeToFile('README.md', response)
            }
});
}

// Function call to initialize app
init();
