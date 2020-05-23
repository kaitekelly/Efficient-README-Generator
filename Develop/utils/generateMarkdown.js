function generateMarkdown(data) {
  return `
# ${data.title}

# ${data.description}

# ${data.tableofcontents}

# ${data.installation}

# ${data.usage}

# ${data.license}

# ${data.contributing}

# ${data.tests}

# ${data.questions}

* The generated README includes 1 badge that's specific to the repository.
// {
  //     // placeholder for badge - https://shields.io/endpoint
  //     badge: 
  // },

`;
}

// module.exports is an object we use to store variables or methods
module.exports = generateMarkdown;
