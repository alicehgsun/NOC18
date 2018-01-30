
var pos;
var prev;

function setup() {
  createCanvas(1000, 1000);
background(0);
  pos = createVector(mouseX, mouseY);
  prev = pos.copy();
  console.log(pos);
}

function draw() {
  pos.x = constrain(pos.x, 0, 1000);
  pos.y = constrain(pos.y, 0, 1000);

  stroke(255);
  strokeWeight(2);
  noFill();
  line(pos.x, pos.y, prev.x, prev.y);
  stroke(255);
  prev.set(pos);

  var step = p5.Vector.random2D();

  var r = random(100);
  if (r < 1) {
    step.mult(random(45, 100));
  } else {
    step.setMag(25);
  }

  //pos = pos + step;
  pos.add(step);

  var d = int(dist(pos.x, pos.y, prev.x, prev.y));
  if (d>5){
    fill(random(255),random(255),random(255),50);
    noStroke();
    triangle(pos.x, pos.y, prev.x, prev.y,500, 500);
  }

}

function mousePressed(){
  setup();
}
