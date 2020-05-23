//Import file system, inquirer, querystrings, path, process modules
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
        message: "Contributing",
        name: "names",
    },
    {
        type: "input",
        message: "Tests",
        name: "testname",
    },

]
// console.log(questions);

function writeToFile(fileName, data) {
    console.log("testing the write to file function")
   


    inquirer.prompt(questions)
    .then(data => {
        console.log('testing the init');

        var fileName = 'README.md';

        var  data = generateMarkdown(data);

    });


}

function writeToFile(fileName, data) {
    console.log("testing the write to file function")
   


    fs.writeFile(fileName, "utf-8", function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });


}

// writeToFile();

function init() {
    console.log('testing');

    inquirer.prompt(questions)
    .then(function(data) {
        console.log('testing the init');

        var fileName = 'README.md';

        var  data = generateMarkdown(data);

        writeToFile();
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

// fs.writeFile("readme.txt", process.argv[2], function(err) {

//   if (err) {
//     return console.log(err);
//   }

//   console.log("Success!");

// });
// console.log(process.argv);


// inquirer.prompt(questions)
// .then(function(data) {
//     //need to check if this is correct
//     let fileName = data.message.toLowerCase().split(' ').join(' ') + ".json";

//     fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {
//         if (err) {
//             return console.log(err);
//         }

//         console.log("Success!")
//     });

// });

// ****As user enters information
// ****it is pushed to a class or Object
// .push()
//aslo need to parse responses to file
// fs.writeFile("log.txt", process.argv[2], function(err) {

//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");

//   });


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