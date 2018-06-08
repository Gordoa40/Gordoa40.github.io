var inc = .1;
var scl = 20;
var cols, rows;
var fr;
var zoff = 0;
var flowfield;

var r = 2;
var g = 1;
var b = 1;

var speedSlider, rSlider, gSlider, bSlider;


let particles = [];

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  flowfield = new Array(cols * rows);
  speedSlider = createSlider(0, 8, 1, .25);
  speedSlider.style('width', '400px');
  rSlider = createSlider(0, 255, 100);

  rSlider.style('width', '400px');
  gSlider = createSlider(0, 255, 0);

  gSlider.style('width', '400px');
  bSlider = createSlider(0, 255, 255);

  bSlider.style('width', '400px');

  //speedSlider.position(50,50,50);

  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(255);
}

function draw() {
  var yoff = 0;
  //  background(255);
  var speed = speedSlider.value();

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
  r = rSlider.value();
  g = gSlider.value();
  b = bSlider.value();
  zoff = zoff + .01;
  for (var i = 0; i < 100; i++) {
    stroke(r, g, b)
    particles[i].maxSpeed = speed;
    particles[i].applyForce(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }


  if (r != 1) {
    r++;
  }
  if (g != 1) {
    g++;
  }
  if (b != 1) {
    b++;
  }
  if (r === 255) {
    r = 1;
    g = 2;
    b = 1;
  }
  if (g === 255) {
    r = 1;
    g = 1;
    b = 2;
  }
  if (b === 255) {
    r = 2;
    g = 1;
    b = 1;
  }





}
