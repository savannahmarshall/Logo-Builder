const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');


const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter up to three characters:',
    validate: input => input.length <= 3 || 'Please enter up to three characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter the color you would like your text to be:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter your desired shape color:',
  }
];

inquirer.prompt(questions).then(answers => {
    let shapeInstance;
  
    switch (answers.shape) {
      case 'Circle':
        shapeInstance = new Circle();
        break;
      case 'Triangle':
        shapeInstance = new Triangle();
        break;
      case 'Square':
        shapeInstance = new Square();
        break;
    }
  shapeInstance.setColor(answers.shapeColor);

  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="110" font-size="40" font-weight="bold" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>
`;

  fs.writeFile('./examples/logo.svg', svgContent.trim(), err => {
    if (err) {
      console.error('Error writing the SVG file:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}).catch(error => {
  console.error('Error during prompt:', error);
});