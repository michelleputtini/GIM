let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    drops.push(new Drop());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let drop of drops) {
    drop.fall();
    drop.show();
  }
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.size = map(this.z, 0, 20, 1, 3);
    this.yspeed = map(this.z, 0, 20, 1, 20);
  }

  fall() {
    this.y += this.yspeed;
    let gravity = map(this.z, 0, 20, 0, 0.2);
    this.yspeed += gravity;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
