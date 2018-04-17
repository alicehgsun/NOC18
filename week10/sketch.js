// Based on: Daniel Shiffman's Particles code & textToPoints instruction

var font;
var vehicles = [];
var bounds;


var img;

function preload() {
  img = loadImage('google.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  img.resize(windowWidth, (windowWidth*img.height)/img.width);
  img.loadPixels();
  var kor_data = 2974
  var en_data = 10941
  var total_data = kor_data + en_data
  var kor = kor_data/total_data
  var en = en_data/total_data
  for (let x = 0; x < floor(img.width*en); x += 15) {
  for (let y = 0; y < img.height; y += 15) {
    let index = (x + y * img.width) * 4;
    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];
    let col = color(r, g, b);
    let br = brightness(col);
    if (br > 1) {
      vehicles.push(new Vehicle(x, y, 10, col));
    }
    }
  }

  for (let x = floor(img.width*(en+0.01)); x < img.width; x += 15) {
  for (let y = 0; y < img.height; y += 15) {
    let index = (x + y * img.width) * 4;
    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];
    let col = color(r, g, b);
    let br = brightness(col);
    if (br > 1) {
      vehicles.push(new Vehicle2(x, y, 10, col));
    }
    }
  }
}


function draw() {
  background(255);
for (let i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      // fill(random(255));
      textSize(10);
      v.update();
      v.show();
      v.behaviors();

  }
}
