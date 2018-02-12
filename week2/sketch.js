// Based on: Daniel Shiffman's Attraction / Repulsion code

var attractors = [];
var attractors2 = [];
var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    attractors.push(createVector(mouseX, mouseY));
  } else if (keyCode === RIGHT_ARROW) {
    attractors2.push(createVector(mouseX, mouseY));
  }
}

function draw() {
  background(0, 0, 0, 0.1);
  particles.push(new Particle(random(width), random(height)));
  if (particles.length > 50) {
    particles.splice(0, 1);
  }
  for (var i = 0; i < attractors.length; i++) {
    if (keyCode === LEFT_ARROW) {
      stroke(180, 100, 100, 1);
      textSize(32);
      text('٭', attractors[i].x, attractors[i].y);
    } else {
      stroke(180, 100, 100, 0.1);
      textSize(20);
      text('☒', attractors[i].x, attractors[i].y);
    }

    for (var n = 0; n < attractors2.length; n++) {
      if (keyCode === RIGHT_ARROW) {
        stroke(360, 100, 100, 1);
        textSize(32);
        text('٭', attractors2[n].x, attractors2[n].y);
      } else {
        stroke(360, 100, 100, 0.1);
        textSize(20);
        text('☒', attractors2[n].x, attractors2[n].y);
      }
    }
  }
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    for (var j = 0; j < attractors.length; j++) {
      if (attractors.length > attractors2.length) {
        particle.attracted(attractors[j]);
      }
      for (var m = 0; m < attractors2.length; m++) {
        if (attractors2.length > attractors.length) {
          particle.attracted2(attractors2[m]);
        } else {
          particle.attracted(attractors[j]);
          particle.attracted2(attractors2[m]);
        }
      }
    }
    particle.update();
    particle.show();
  }
}
