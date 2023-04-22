const inquirer = require('inquirer');

const askQuestions = () => {
  const questions = [
    {
      name: 'FILENAME',
      type: 'input',
      message: 'Please input the project name such as: MyNodeProject --> ',
    },
    {
      type: 'list',
      name: 'VERSION',
      message: 'Which version do you want to install? --> ',
      choices: [
        'based: Create a base version includes TS',
        'completed: Create a complete version include all',
        'frontend: Create a monorepo frontend project about TS + Vue3' 
      ],
      filter: function (val) {
        return val.split(':')[0] ;
      },
    },
  ];
  return inquirer.prompt(questions);
};

module.exports = {
    askQuestions
}