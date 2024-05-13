function setup() {
	createCanvas(400, 300)

}


function windowResize() {
	resizeCanvas (windowWidth, windowHeight)

}

function draw() {
	
	background(255)

	stroke(0) 
	fill(255, 0, 0)
	rect(20, 10, 80, 60)

	stroke(255, 128, 0)
	fill(0, 255, 0)
	rect(50, 30, 80, 60)

	stroke(0)
	fill(0, 200, 50)
	circle(width/2, height/2, 90)

	point(120, 140)

	// se i tre valori sono identici è possibile inserirne solo 1
	// stroke(255) quivale a stroke(255, 255, 255)
	stroke(0, 0, 255) 
	line(100, 220, 300, 70)

	
}