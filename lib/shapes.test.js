const { Triangle, Circle, Square } = require('./shapes'); // import the shape classes

// test case for the triangle shape
test('Triangle shape renders correctly', () => {
    const shape = new Triangle(); // create a new triangle instance
    shape.setColor('blue'); // set the color of the triangle to blue
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); // verify that the rendered output matches the expected SVG string
  });
  
// test case for the circle shape
  test('Circle renders correctly', () => {
    const shape = new Circle(); // create a new circle instance 
    shape.setColor('red'); // set the color of the circle to red
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />'); // verify that the rendered output matches the expected SVG string
  });
  
  test('Square renders correctly', () => {
    const shape = new Square(); // create a new square instance 
    shape.setColor('green'); // set the color of the square to green
    expect(shape.render()).toEqual('<rect x="100" y="20" width="200" height="200" fill="green" />'); // verify that the rendered output matches the expected SVG string
  });