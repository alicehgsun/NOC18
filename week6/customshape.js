// Based on: Daniel Shiffman's Polygon example with box2d


let myFont;

function preload() {
  myFont = loadFont('Brown-Bold.otf');
}

// Constructor
class CustomShape {
  constructor(x, y) {
    // Define a body
    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);
    // Define a fixture
    let fd = new box2d.b2FixtureDef();

    this.r = random(255);
    this.g = random(255);
    this.textsize = random(20, 100);

    // Fixture holds shape
    fd.shape = new box2d.b2PolygonShape();
    fd.shape.SetAsBox(scaleToWorld(this.textsize), scaleToWorld(10));

    // Some physics
    fd.density = 1.0;
    fd.friction = 0.5;
    fd.restitution = 0.2;

    // Create the body
    this.body = world.CreateBody(bd);
    // Attach the fixture
    this.body.CreateFixture(fd);

  }

  // This function removes the particle from the box2d world
  killBody() {
    world.DestroyBody(this.body);
  }

  // Is the particle ready for deletion?
  done() {
    // Let's find the screen position of the particle
    let pos = scaleToPixels(this.body.GetPosition());
    // Is it off the bottom of the screen?
    if (pos.y > height + this.w * this.h) {
      this.killBody();
      return true;
    }
    return false;
  }

  // Drawing the box
  display() {
    // Get the body's position
    let pos = scaleToPixels(this.body.GetPosition());
    // Get its angle of rotation
    let a = this.body.GetAngleRadians();

    // Draw it!
    let f = this.body.GetFixtureList();
    let ps = f.GetShape();

    rectMode(CENTER);
    push();
    translate(pos.x, pos.y);
    rotate(a);
    textSize(this.textsize);
    textFont(myFont);
    fill(this.r, 100, 100);
    noStroke();
    text(input.value(), 0, 0);
    pop();
  }
}
