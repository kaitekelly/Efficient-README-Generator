const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = [{
        type: "input",
        message: "What is your GitHub user name?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your project description?",
        name: "description",
    },
    {
        type: "input",
        message: "Enter table of Contents",
        name: "description",
    },
    {
        type: "input",
        message: "Installation:",
        name: "description",
    },
    {
        type: "input",
        message: "Usage",
        name: "description",
    },
    {
        type: "input",
        message: "License",
        name: "ISC",
    },
    {
        type: "input",
        message: "Who contributed to your project?",
        name: "names",
    },
    {
        type: "input",
        message: "Were any tests performed?",
        name: "testname",
    },
]
// console.log(questions);


function writeToFile(fileName, data) {
    console.log("testing the write to file function");
    var fileName = 'README.md';


    fs.writeFile(fileName, data,  "utf-8", function(err) {
        if (err)  throw err;
            // return console.log(err);
        generateMarkdown();
        console.log("Success!");
    });



}


function init() {
    console.log('testing');

    inquirer.prompt(questions)
    .then(function(data) {
        console.log('testing the init');

        // then right Here send the data to the readme file

        var readme = 'README.md';
        console.log(readme);

        //this line of code prints the data object to the terminal
        generateMarkdown(data, readme); 
        // ----- this is interchangable 
        // with generateMarkdown in writeFile function

        // writeFile();
    });
    
   
}

init();

// the user will be presented with a prompt function that will show user a question
// then capture the users response and push to an a class or object 
// First prompted for their Github username
// then prompted for all of the below:



// * In `index.js`, create variables to capture the values passed from the 
// command line in `process.argv`: `operation`, `numOne` and `numTwo`.
//will need to use parseInt() with process.argv

// ****As user enters information
// ****it is pushed to a class or Object
// .push()
//aslo need to parse responses to file


// ****then the class or object is used to generate the readme fileName
// ****createFile("README.md")

// function writeToFile(fileName, data) {
// }

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