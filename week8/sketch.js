// Based on: Daniel Shiffman's Evolutionary "Steering Behavior" Simulation

let population = [];
let food = [];
let poison = [];

let nutrition = [0.1, -1];

let debug;

let font;



function preload() {
  /* Following font does not belong to Alice Sun. */
  /* Installation or usage of the following font is prohibited. */
  font = loadFont('Alpha.otf');
  g1 = loadImage("ghost1.svg");
  g2 = loadImage("ghost2.svg");
}

function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvascontainer');
  debug = select('#debug');

  let points = font.textToPoints('Food!', (windowWidth*0.045), windowHeight/2, windowWidth/3, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  });

  angleMode(RADIANS);
  for (let i = 0; i < 10; i++) {
    population[i] = new Vehicle(width / 2, height / 2);
  }
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    food.push(createVector(pt.x, pt.y));
  }
}

function mouseDragged() {
  population.push(new Vehicle(mouseX, mouseY));
}

function draw() {
  background(0,0, 40);

  // // 1% chance of new poison
  if (random(1) < 0.01) {
    poison.push(createVector(random(width), random(height)));
  }


  for (let i = population.length - 1; i >= 0; i--) {
    let v = population[i];

    // Eat the food (index 0)
    v.eat(food, 0);
    // Eat the poison (index 1)
    v.eat(poison, 1);
    v.boundaries();

    v.update();
    v.display();

    if (v.dead()) {
      population.splice(i, 1);
    } else {
      let child = v.birth();
      if (child != null) {
        population.push(child);
      }
    }
  }

  for (let i = 0; i < food.length; i++) {
    fill(255, 255, 255);
    noStroke();
    ellipse(food[i].x, food[i].y, 3);
  }

  for (let i = 0; i < poison.length; i++) {
    let ghosts = [g1,g2];
    let callghost = random(ghosts)
    image(callghost, poison[i].x, poison[i].y, 30, 36)
  }
}
