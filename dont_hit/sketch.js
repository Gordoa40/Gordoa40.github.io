
let x;
let y;
let playerD = 20;
let spikes = [];
let spikeIndex = 0;
let sun;
let score = 0;
let width = 400;
let height = 600;
let spikespeed = 1;
let sunhit = 0;


function setup() {
	createCanvas(width, height);
	background(89, 152, 255);

	x = randomX();
	y = randomY();
//	for(let i = 0; i < 20; i++){
//		spikes[i] = new Spike();
//	}
	sun = new Token();
	textSize(32);
}

function draw() {
	stroke(0);
	background(89, 152, 255);
	fill(9, 255, 38);
	rect(x-playerD/2, y-playerD/2, playerD, playerD);

	fill(255, 59, 10)
	for(let i = 0; i < spikes.length; i++){
		spikes[i].drawSpike();
		spikes[i].moveSpike();
	}
	if(sunhit == 0 && score%10 == 0){
		spikespeed += 1;
		sunhit = 1;
	}

	fill(246, 255, 10)
	sun.drawToken();
	collideSun();
	collikeSpike();

	//write score
	scoretext = "Score: " + score;
	fill(0);
	noStroke();
	text(scoretext, 5, height-5);


}

function mouseMoved(){
	x = mouseX;
	y = mouseY;
}

function collideSun(){
	if (x-playerD/2 < sun.sunx + sun.sunwidth &&
			x-playerD/2 + playerD > sun.sunx &&
			y-playerD/2 < sun.suny + sun.sunheight &&
			playerD + y-playerD/2 > sun.suny) {
				sun = new Token();
				score += sun.points;
				spikes[spikeIndex] = new Spike(spikespeed);
				spikeIndex += 1;
				sunhit = 0;
	}

}
function collikeSpike(){
	for(let i = 0; i < spikes.length; i++){
		let test = spikes[i];
		if (x-playerD/2 < test.spikex + test.spikewidth &&
   			x-playerD/2 + playerD > test.spikex &&
   			y-playerD/2 < test.spikey + test.spikeheight &&
   			playerD + y-playerD/2 > test.spikey) {
					noLoop();
					console.log("score: " + score);
		}
	}

}
function randomX(){
	return random(0, width);
}

function randomY(){
	return random(0, height);
}
