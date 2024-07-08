const fs = require('fs'); // import the filesystem module for file operations
const inquirer = require('inquirer'); // important the inquirer module for user input
const { Circle, Triangle, Square } = require('./lib/shapes'); // import shape classes from shapes module

// define the questions for user input
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

// promt the user with the defined questions
inquirer.prompt(questions).then(answers => {
    let shapeInstance;
  
    // create an instance of the chosen shape
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

    // set the color of the shape
  shapeInstance.setColor(answers.shapeColor);

  // generate the SVG content
  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="110" font-size="40" font-weight="bold" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>
`;
    // write the generated SVG content to a file
  fs.writeFile('./examples/logo.svg', svgContent.trim(), err => {
    if (err) {
      console.error('Error writing the SVG file:', err); // log error if writing fails
    } else {
      console.log('Generated logo.svg'); // confirm successful file write
    }
  });
}).catch(error => {
  console.error('Error during prompt:', error); // log any errors encountered during prompting
});