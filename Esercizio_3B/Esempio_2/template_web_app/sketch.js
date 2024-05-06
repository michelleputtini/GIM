let posX, posY
let velx, velY


function setup() {
	createCanvas(windowWidth, windowHeight)

	posX = width/2
	posY = height/2

	velX = 10
	velY = 4
}


function windowResize() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(200)

	circle(posX, posY, 30)

	posX = posX + velX
	posY = posY + velY
}