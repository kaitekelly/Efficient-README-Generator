var fs = require("fs");
var inquirer = require("inquirer");



const questions = [
    {
        // placeholder for badge - what should i put here?
        badge: 
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
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
