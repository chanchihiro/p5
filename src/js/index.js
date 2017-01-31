import P5 from 'p5';


console.log('start'); //スタート


const s = function(p) {
	let rad = 0; //ラジアンとは角度*Math.PI/180である
	let degree = 50;
	let x = 0;
	let y = 0;

	function reset() {
		while(p.rect.length > 0) {
			p.rect.pop;
		}
	}
	p.setup = function() {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.background(255,255,255);
		reset();
	}
	p.draw = function() {
		p.fill(0);
		p.triangle(150, 400, 680, 400, 580, 115);
		p.rect(300, 380, 430, 20);
		p.line(150, 400, 650, 65);
		p.strokeWeight(3);
		p.ellipse()
		p.text('SUZURI', 150, 420);

		// x += 3;
		// degree += 30;
		// rad = degree * Math.PI / 180;
		// y = Math.sin(rad) * 50;
	}
}

new P5(s);

console.log("end"); //終わり