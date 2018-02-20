// Based on:
 // *    fjenett 2009-05-07
 // *    system für einen generativen font,
 // *    schrift-skelet von tobias tschense

let input = "tel5554445";
let spacing = 70;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  drawGenerativeText(input, 15, height / 2);
}


function rLine(x1, y1, x2, y2) {
  let d = 100;
  for (let i = 0; i <= d; i++) {
    let x = lerp(x1, x2, i / d);
    let y = lerp(y1, y2, i / d);

    noStroke()
    fill(random(255), random(255), random(255), 50);
    ellipse(x + random(5 + mouseX / 50), y + random(5 + mouseY / 50), 5, 5);
  }

}
