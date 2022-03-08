// function to generate markdown for README
const generateMarkdown = data => {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage 
${data.usage}

## License
This project is licence under ${data.license}

## Contribution
${data.contribution}

## Test
${data.test}

## Questions
If you have any questions about this projects, please contact me at ${data.email}. you can view more of my project at https://github.com/${data.github}.
`;

}

// use for importing markdown in index
module.exports = generateMarkdown;