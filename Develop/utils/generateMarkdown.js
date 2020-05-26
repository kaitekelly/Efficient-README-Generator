let index = require('../index.js')

function generateMarkdown(data) {
  console.log(data);
  return `

<a href="https://github.com/${data.username}"><img src="https://img.shields.io/badge/Github%20page-${data.username}-1abc9c.svg" alt="User's github profile"></a>

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
