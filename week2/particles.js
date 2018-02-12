// Based on: Daniel Shiffman's Attraction / Repulsion code

function Particle(x, y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  this.vel = createVector();
  this.acc = createVector();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function() {
    if (attractors.length > attractors2.length){
      stroke(180,100, 100, 1)
    } else if (attractors2.length > attractors.length){
      stroke(360,100, 100, 1)
    } else {
      stroke(270,100,100,1)
    }
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;

  }

  this.attracted = function(target) {
    // var dir = target - this.pos
    var force = p5.Vector.sub(target, this.pos);
    var d = force.mag();

    d = constrain(d, 1, 20);

    var G = 5;
    var strength = G / (d * d);
    force.setMag(strength);
    if (d < 20) {
      force.mult(-10);
    }
    this.acc.add(force);
  };

  this.attracted2 = function(target2) {
    var force = p5.Vector.sub(target2, this.pos);
    var d = force.mag();

    d = constrain(d, 1, 20);

    var G = -5;
    var strength = G / (d * d);
    force.setMag(strength);
    if (d < 20) {
      force.mult(-10);
    }
    this.acc.add(force);
  }

}
