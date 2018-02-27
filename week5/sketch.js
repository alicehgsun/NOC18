// Based on: Daniel Shiffman's Particles code & textToPoints instruction

var font;
var vehicles = [];
var bounds;

function preload() {
  font = loadFont('GT-Sectra-Display-Trial-Super.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  var points = font.textToPoints('GT Sectra Super,', windowWidth/16, windowHeight/2, windowHeight/6, {
    sampleFactor: 1,
    simplifyThreshold: 0
  });
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    vehicles.push(new Vehicle(pt.x, pt.y));
  }

  bounds = font.textBounds('particles', 50, 180);
}


function draw() {
  background(0);
  if (mouseIsPressed) {
    for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      stroke(255,0,0);
      v.shatter();
      v.show();
    }
  } else {
    for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      stroke(random(255),random(255),255);
      v.update();
      v.show();
      v.behaviors();
    }
  }
}
