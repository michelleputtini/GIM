function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)

	let s = second()
	if (s < 10) {
		s = "0" + s
	}

	let h = hour()
	if (h < 10) {
		h = "0" + h
	}

	let m = minute()
	if (m < 10) {
		m = "0" + m
	}

	
	const diam = min(height, width) * 0.9
	const hourSize = map(h % 12, 0, 11, 0, diam)
	const minuteSize = map(m, 0, 59, 0, diam)
	const secondSize = map(s, 0, 59, 0, diam)
	
	stroke(0, 100, 10)
	ellipse(width / 2, height / 2, diam, diam)

	noFill()
	strokeWeight(15)
	stroke(0, 90, 255)
	ellipse(width / 2, height / 2, hourSize, hourSize)

	noFill()
	strokeWeight(5)
	stroke(255, 50, 0)
	ellipse(width / 2, height / 2, minuteSize, minuteSize)

	noFill()
	strokeWeight(1)
	stroke(255, 255, 0)
	ellipse(width / 2, height / 2, secondSize, secondSize)

}
