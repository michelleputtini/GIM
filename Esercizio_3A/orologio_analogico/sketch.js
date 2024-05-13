function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(200)



	translate(width/2, height/2)


	stroke(0, 50)
	line(0, -200, 0, 200)
	line(-200, 0, 200, 0)


	noStroke()
	fill(0)

	push()
	rotate(TAU / 12 * (hour() % 12) + TAU / 12 / 60 * minute())
	rect(-8, 25, 16, -140)
	pop()


	push()
	rotate(TAU / 60 * minute())
	rect(-5, 25, 10, -170)
	pop()


	push()
	noStroke()
	fill(255, 0, 0)
	rotate(TAU / 60 * second())
	rect(-2, 25, 4, -200)
	circle(0, -180, 24)
	pop()

	fill(255)
	circle(0,0, 12)


}

