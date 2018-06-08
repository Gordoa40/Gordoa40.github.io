let spikex;
let spikey;
let dir;
let speed;
let spikewidth;
let spikeheight;
let img;

function Spike(spikespeed){
  this.spikewidth = 19;
  this.spikeheight = 19;
  this.speed = spikespeed;
  this.spikex = random(this.speed+1, width-this.spikewidth);
  this.spikey = random(this.speed+1, height-this.spikeheight);
  this.dir = random();
  this.img = loadImage('spike.png');

  this.drawSpike = function(){
    //rect(this.spikex, this.spikey, this.spikewidth, this.spikeheight);
    image(this.img, this.spikex, this.spikey);
  }


  this.moveSpike = function(){
    if(this.dir < .50){
      this.spikex += this.speed;
      if(this.spikex + this.spikewidth > width || this.spikex < 0){
        this.speed *= -1;
      }
    }else{
      this.spikey += this.speed;
      if(this.spikey + this.spikeheight > height || this.spikey < 0){
        this.speed *= -1;
      }
    }
  }
}
