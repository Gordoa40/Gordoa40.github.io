let sunx, suny, sunwidth, sunheight, points;

function Token(){
  this.sunheight = 10;
  this.sunwidth = 10;
  this.sunx = random(0, width - this.sunwidth);
  this.suny = random(0, height - this.sunheight)
  this.points = 1;

  this.drawToken = function(){
    rect(this.sunx, this.suny, this.sunwidth, this.sunheight);
  }

}
