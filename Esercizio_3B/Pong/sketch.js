let posX, posY
let velx, velY


function setup() {
	createCanvas(windowWidth, windowHeight)

	posX = width/2
	posY = height/2

	velX = 10
	velY = 2
}


function windowResize() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {

	posX = posX + velX
	posY = posY + velY

	if (posX >= width || posX < 0)  {
		velX = -velX

	}
	
	if (posY >= height || posY < 0)  {
		velY = -velY

	}

	fill(random(256), random(256), random(256),)
	noStroke()

	// background(200)
	circle(posX, posY, random(50, 300))
}

