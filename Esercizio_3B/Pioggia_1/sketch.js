function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(0)
  
  for (let i = 0; i < 100; i++) {
    let x = random(width)
    let y = random(-500, windowHeight)
    let length = random(10, 20)
    
    stroke(255);
    strokeWeight(random(1, 3))
    line(x, y, x, y + length)
    
    y += random(5, 20)
    
    if (y > windowHeight) {
      y = random(-200, -100)
    }
  }
}
