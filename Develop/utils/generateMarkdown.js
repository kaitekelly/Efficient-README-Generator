function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

// module.exports is an object we use to store variables or methods
module.exports = generateMarkdown;
