var inc = .1;
var scl = 20;
var cols, rows;
var fr;
var zoff = 0;
var flowfield;

var r = 2;
var g = 1;
var b = 1;

let particles = [];

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  flowfield = new Array(cols * rows);

  for (var i = 0; i < 100; i++) {
    particles[i] = new Particle();
  }
	background(255);
}

function draw() {
  var yoff = 0;
//background(255);
  fr.html(floor(frameRate()))
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * cols);
      var r = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(r);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
      strokeWeight(1);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
    //  line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;

  }
  zoff = zoff + .01;
  for (var i = 0; i < 100; i++) {
		stroke(r,g,b,50);
    particles[i].applyForce(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }


	if(r != 1){
		r++;
	}
	if(g!=1){
		g++;
	}
	if(b!=1){
		b++;
	}
	if(r === 255){
		r = 1;
		g = 2;
		b = 1;
	}
	if(g === 255){
		r = 1;
		g = 1;
		b = 2;
	}
	if(b === 255){
		r = 2;
		g = 1;
		b = 1;
	}





}
