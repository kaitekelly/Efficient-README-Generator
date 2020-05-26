const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = [{
        type: "input",
        name: "username",
        message: "What is your GitHub user name?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?",
    },
    {
        type: "input",
        name: "toc",
        message: "Enter Table of Contents to make it easier for users to find what they need",
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your project? Please provide instructions to setup development environment.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
        type: "input",
        name: "contribute",
        message: "List collaborators and link their GitHub profiles, third-party assets, and any tutorials used.",
    },
    {
        type: "input",
        name: "tests",
        message: "List any tests written and examples on how to run them.",
    },
    {
        type: "input",
        name: "license",
        message: "List any licenses' your project may include. Choices include ISC, MIT, Apache License 2.0, GNU GPLv2, GNU GPLv3",
    },
]

function writeToFile(fileName, data) {
    console.log("testing the write to file function");
    var fileName = 'README.md';


    fs.writeFile(fileName, data,  "utf-8", function(err) {
        if (err)  throw err;  
        console.log("Success!");

    });

}

function init() {
    console.log('testing');

    inquirer.prompt(questions)
    .then(function(data) {
        console.log('testing the init');

        //this line of code prints the data object to the terminal
        let readme = generateMarkdown(data);
        var fileName = 'README.md';
        return writeToFile(fileName, readme);

    }); 
}

init();

// **************************
// Pseudo Code 

// Application is invoked with this command = node index.js

// When application is invoked when
//  generateMarkdown.on is clicked
// the user will be presented with a prompt function that will show user a question
// then capture the users response and push to an a class or object 
// First prompted for their Github username
// then prompted for all of the below:

// * At least one badge
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email
//   * 

// As user enters information
// it is pushed to a class or Object

// then the class or object is used to generate the readme fileName
// createFile("README.md")