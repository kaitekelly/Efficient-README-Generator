let index = require('../index.js')

function generateMarkdown(data) {
  console.log(data);
  return `

  ![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)


# Username: 
${data.username}

# Title:
${data.title}

# Description:
${data.description}

# Table of Contents: 
${data.toc}

# Installation: 
${data.installation}

# Usage: 
${data.usage}

# Contribute: 
${data.contribute}

# Tests: 
${data.tests}

# License: 
${data.license}

`;
}

// module.exports is an object we use to store variables or methods
module.exports = generateMarkdown;
