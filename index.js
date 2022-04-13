import fs from 'fs';
import templates from './templates.js';
import inquirer from 'inquirer';

function writeFile(name, fileType) {
  const fileName =
    fileType === 'component'
      ? `./functions/${name}.js`
      : `./functions/${name}.${fileType}.js`;

  const templateFunction = templates[fileType];
  const fileString = templateFunction(name);

  fs.writeFileSync(fileName, fileString);
}

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What the name of the function?',
    },
    {
      type: 'checkbox',
      name: 'fileTypes',
      message: 'Which file types should be created?',
      choices: ['component', 'spec', 'stories'],
      validate: answer => {
        if (answer.length < 1) {
          return 'You must select at least one type!';
        }
        return true;
      },
    },
  ])
  .then(answers => {
    answers.fileTypes.forEach(type => {
      writeFile(answers.functionName, type);
    });
  });
