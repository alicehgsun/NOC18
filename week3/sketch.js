// Based on: Daniel Shiffman's Polar Rose code

function setup() {
  var sizeall = windowHeight;
  createCanvas(sizeall, sizeall);
  textSize(width / 66);
}

function draw() {
  background(0);
  for (var transX = width / 8; transX < width; transX += width / 8) {
    for (var transY = width / 8; transY < width; transY += width / 8) {
      var d = map(transY, 0, width, 0, 7);
      var n = map(transX, 0, height, 0, 7);
      var k = n / d;
      push();
      translate(transX + (width / 100), transY);
      beginShape();
      strokeWeight(1);
      noFill();
      var repeat = (frameCount % 650) / 100;
      var polygon = map(mouseX, 0, width, 0.1, 0.9);
      for (var a = 0; a < TWO_PI * repeat; a += polygon) {
        var r = float((width / 20) * cos(k * a));
        var x = r * cos(a);
        var y = r * sin(a);
        stroke(n * 40, 50, d * 60);
        vertex(x, y);
      }
      endShape();
      pop();
      noStroke();
      fill(200);
      text("n/d", width / 33, height / 20);
      text(int(n) + 1 + "(n)", transX, height / 20);
      text(int(d) + 1 + "(d)", width / 33, transY);
      text("repeat: " + repeat, width / 33, height / 1.03);
      text("Rose with k petals (k = n/d)", width / 1.3, height / 1.03);
    }
  }

}
