// base classes for all the shapes
class Shape {
    constructor() {
      this.color = ''; // initializes the color property
    }
    
  // method to set the color of the shape
    setColor(color) {
      this.color = color;
    }
  }
  
  // class for the triangle shape, extends the base shape class
  class Triangle extends Shape {
    // method to render the SVG representation of the triangle
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`; // define the triangle using polygon SVG element
    }
  }
  
  // class for the circle shape, extends the base shape class
  class Circle extends Shape {
    // method to render the SVG representation of the circle
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`; // define the circle using the circle SVG element
    }
  }
  
  // class for the square shape, extends the base shape class
  class Square extends Shape {
    // method to render the SVG representation of the square
    render() {
      return `<rect x="100" y="20" width="200" height="200" fill="${this.color}" />`; // define the square using the rect SVG element
    }
  }
  
  module.exports = { Triangle, Circle, Square };