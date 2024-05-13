let numero_fiocchi = 100;

let fiocchi = [];
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  for (let i = 0; i < numero_fiocchi; i++) {
    let fiocco = {
      x: random(width),
      y: random(-height, 0),
      offX: random(1000),
      offY: random(1000)
    };
    fiocchi.push(fiocco);
  }
}

function draw() {
  background(0);
  time += 0.01;
  
  for (let i = 0; i < numero_fiocchi; i++) {
    let fiocco = fiocchi[i];
    
    let noiseX = noise(fiocco.offX + time) * 2 - 1;
    let noiseY = noise(fiocco.offY + time) * 2 - 1;
    
    fiocco.x += noiseX;
    fiocco.y += noiseY + 1;
    
    fill(255);
    ellipse(fiocco.x, fiocco.y, 10, 10);
    
    if (fiocco.y > height || fiocco.x < 0 || fiocco.x > width) {
      fiocco.x = random(width);
      fiocco.y = random(-height, 0);
    }
  }
}
