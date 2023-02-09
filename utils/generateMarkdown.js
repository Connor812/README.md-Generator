let licenseDescription;
let searchTag;
let licenseLink;

function renderLicenseLink(license) {
  
  if (license == 'No License') {
    licenseDescription = '';
    searchTag = 'license-Unlicense';
  } 
  else if (license == 'Apache License 2.0') {
    searchTag = 'Apache-License_2.0';
    licenseLink = '[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)'
    licenseDescription = `
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    `;
  } 
  else if (license == 'GNU General Public License v3.0') {
    searchTag = 'License-GPLv3'
    licenseLink = '[GNU General Public License v3.0](https://www.gnu.org/licenses/)'
    licenseDescription = 
    `
    The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.
    
    `;
  }
  else if (license == 'MIT License') {
    searchTag = 'License-MIT'
    licenseLink = '[MIT License](https://opensource.org/licenses/MIT)'
    licenseDescription = `
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.
    
    `;
  } 
  else if (license == 'Mozilla Public License 2.0') {
    searchTag = 'License-MPL_2.0';
    licenseLink = '[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)'
    licenseDescription = `
    All distribution of Covered Software in Source Code Form, including any Modifications that You create or to which You contribute, must be under the terms of this License. You must inform recipients that the Source Code Form of the Covered Software is governed by the terms of this License, and how they can obtain a copy of this License. You may not attempt to alter or restrict the recipients’ rights in the Source Code Form.    
    `;
  }

  link = `https://img.shields.io/badge/${searchTag}-blue.svg`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseLink(data.license)
  return `
  # ${data.title} ![alt](${link})

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributings)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}
${licenseDescription}
${licenseLink}

## Contributings

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions or concerns about my application, please contact me via email.
Email: ${data.email}
Github: [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
