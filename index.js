const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters to display on your logo: ',
      validate: input => input.length <= 3 || 'Please enter up to three characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter your desired text color (keyword or hex): '
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please choose a shape:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter shape color (keyword or hex): '
    }
  ];