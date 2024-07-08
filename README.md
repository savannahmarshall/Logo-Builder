# SVG-Logo-Maker

## Description
This command-line application generates a logo based on user input and saves it as an SVG file. Users can select a shape and color, provide text for the logo, and save the generated SVG to a .svg file.

### Key Learnings:
* Interactive Command-Line Prompts: Refined skills in creating interactive command-line prompts using Node.js.
* Class Utilization: Leveraged classes to define various shape and color options for the logo.
* Switch Statements: Implemented switch statements for conditional logic based on user choices.
* Jest Framework: Developed and ran tests using the Jest framework to ensure code reliability.

### Challenges Faced:
* Testing Complexity: Understanding the numerous components needed for comprehensive tests was challenging.
* Inquirer Import Issue: Encountered and resolved a bug related to importing the Inquirer package.
* Switch/Case Implementation: Initially found switch/case statements confusing but overcame this by researching examples.
* Text Centering: Faced difficulties in centering text within the square and circle shapes, which required additional research and adjustments.

By tackling these challenges, I enhanced my understanding of creating interactive command-line applications, utilizing object-oriented programming principles, and conducting effective unit testing.

## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To use this application, you must install [Node.js](https://nodejs.org/en). Before running this application, you must install inquirer by typing "npm install inquirer@8.2.4" into the command-line. You must also install [Jest](https://jestjs.io/) and you can do so by typing "npm install --save-dev jest" into the command-line.

## Usage

To use this application, follow these steps:

1. Ensure Node.js is Installed: Confirm that Node.js is installed on your machine. If not, download and install it from the official Node.js website which can be found in the installation section above.

2. Install Dependencies: Navigate to the project folder in your command-line and run the following commands to install the necessary dependencies:
   * npm install inquirer@8.2.4
   * npm install --save-dev jest
3. Run the Application: Initialize the command-line prompts by typing:
   * node index.js
4. Answer Prompts: Follow the prompts to enter your text (up to three characters), select your desired shape and colors.
5. View the Generated Logo: The generated logo will be saved as logo.svg inside the examples folder. To view it:
    * Navigate to the examples folder.
    * Right-click on logo.svg and select "Reveal in File Explorer."
    * Right-click on logo.svg again, choose "Open with," and select your preferred browser.

You should now see your customized logo in the browser, displaying the text, shape, and colors you selected.

Please click [here]() to view a demo on how to use this application.


![screenshot of logo example]()

![screenshot of logo questions and answers in command line]()




## Contributing
* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en)
* [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4)
* [Jest](https://jestjs.io/)

## License
This project was created using the [MIT License](https://opensource.org/license/MIT).

## Tests
To ensure the reliability of the application, Jest has been used to create and run unit tests. The tests cover the following aspects:

* Shape Classes: Verify that each shape class (Triangle, Circle, Square) correctly renders the SVG markup based on the set color.
* Rendering Logic: Ensure that the render() methods for each shape produce the expected SVG output.
  
To run the tests, ensure that Jest has been installed using the command "npm install --save-dev jest" and run the tests by entering "npm test."

## Questions
Please contact me directly with any questions. My information is below:  
GitHub: https://github.com/savannahmarshall  
Email: savvymarshall@gmail.com
