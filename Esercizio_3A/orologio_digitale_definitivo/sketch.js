function setup() {
	createCanvas(windowWidth, windowHeight);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(225);

	let s = second();
	if (s < 10) {
		s = "0" + s;
	}

	let h = hour();
	if (h < 10) {
		h = "0" + h;
	}

	let m = minute();
	if (m < 10) {
		m = "0" + m;
	}

	let txt = +h + ":" + m + ":" + s;

	// Dimensioni per cerchi
	let hourSize = map(h % 12, 0, 11, 0, width / 3);
	let minuteSize = map(m, 0, 59, 0, width / 3);
	let secondSize = map(s, 0, 59, 0, width / 3);

	// Disegna cerchi
	noFill();
	strokeWeight(2);

	// Cerchio blu per ore
	stroke(0, 0, 255); // Blu
	ellipse(width / 2, height / 2, hourSize, hourSize);

	// Cerchio rosso per minuti
	stroke(255, 0, 0); // Rosso
	ellipse(width / 2, height / 2, minuteSize, minuteSize);

	// Cerchio giallo per secondi
	stroke(255, 255, 0); // Giallo
	ellipse(width / 2, height / 2, secondSize, secondSize);

	// Testo dell'orario
	textAlign(CENTER, CENTER);
	textSize(30);
	fill(255);
	noStroke();
	text(txt, width / 2, height / 2);
}
