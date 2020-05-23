let index = require('../index.js')

function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.username}

# ${data.title}

# ${data.description}

# ${data.toc}

# ${data.installation}

# ${data.usage}

# ${data.contribute}

# ${data.tests}

# ${data.license}


* The generated README includes 1 badge that's specific to the repository.
// {
  //     // placeholder for badge - https://shields.io/endpoint
  //     badge: 
  // },

`;
}

// module.exports is an object we use to store variables or methods
module.exports = generateMarkdown;
