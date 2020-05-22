//Import file system, inquirer, querystrings, path, process modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// const generateMarkdown = require(generateMarkdown);


const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username",
    },
    // {
    //     // placeholder for badge - https://shields.io/endpoint
    //     badge: 
    // },
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
    {
        type: "image",
        message: "Enter user Github profile picture",
        picture: "",
    },
    {
        type: "input",
        message: "Enter user Github email address",
        email: "email address",
    }
]
console.log(questions);

// the user will be presented with a prompt function that will show user a question
// then capture the users response and push to an a class or object 
// First prompted for their Github username
// then prompted for all of the below:


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


// function init() {

// }

// init();

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