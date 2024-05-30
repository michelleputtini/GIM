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
	
	stroke(128, 128, 128, 80)
	strokeWeight(0.5)
	ellipse(width / 2, height / 2, diam, diam)

	noFill()
	strokeWeight(16)
	stroke(30, 150, 255) //blu
	ellipse(width / 2, height / 2, hourSize, hourSize)

	noFill()
	strokeWeight(6)
	stroke(255, 50, 80) //rosso
	ellipse(width / 2, height / 2, minuteSize, minuteSize)

	noFill()
	strokeWeight(2)
	stroke(230, 230, 0) //giallo
	ellipse(width / 2, height / 2, secondSize, secondSize)

}
