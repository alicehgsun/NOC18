class Vehicle {

  constructor(x, y, r) {
    this.pos = createVector(x, y, 90);
    this.target = createVector(x, y);
    this.vel = createVector();
    this.vel.mult(0.5);
    this.acc = createVector();
    this.r = r;
    this.maxspeed = 5;
    this.maxforce = 2;
  }


  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.vel.mult(0.95);
  }

  show() {
    // beginShape()
    point(this.pos.x + random(mouseX / 100), this.pos.y + random(mouseY / 100));
    // endShape(CLOSE)
  }

  behaviors() {
    var arrive = this.arrive(this.target);
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);
    arrive.mult(1);
    flee.mult(5);
    this.applyForce(arrive);
    this.applyForce(flee);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  // click

  shatter() {
    let force = p5.Vector.random2D();
    force.mult(10);
    this.applyShatter(force);
  }
  applyShatter(force) {
    this.acc.add(force);
  }

  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    let speed = this.maxspeed;
    if (d < 120) {
      speed = map(d, 0, 120, 0, this.maxspeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }


  flee(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    if (d < 60) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }

  }


}
