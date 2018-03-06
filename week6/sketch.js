// Based on: Daniel Shiffman's Polygon example with box2d

let world;
let word;
let boundaries = [];
let words = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(140, 23);
  world = createWorld();
  boundaries.push(new Boundary(width / 2, height, width, 0, 0));
  boundaries.push(new Boundary(width, height / 2, 0, height, 0));
  boundaries.push(new Boundary(0, height / 2, 0, height, 0));
}

function draw() {
  background(0);

  let timeStep = 1.0 / 30;
  world.Step(timeStep, 10, 10);

  // Display all the boundaries
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].display();
  }
  // Display all the boxes
  for (let i = words.length - 1; i >= 0; i--) {
    words[i].display();
    if (words[i].done()) {
      words.splice(i, 1);
    }
  }
}


function mousePressed() {
  let cs = new CustomShape(mouseX, mouseY);
  words.push(cs);
}
