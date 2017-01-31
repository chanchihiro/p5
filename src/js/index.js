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
		reset();
	}
	p.draw = function() {
		p.background(255,255,255);
		p.rect(x, y + 100, 50, 50);

		x += 3;
		degree += 30;
		rad = degree * Math.PI / 180;
		y = Math.sin(rad) * 50;
	}
}

new P5(s);

console.log("end"); //終わり