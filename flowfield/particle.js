function Particle(){
  this.pos = createVector(random(width),random(height));
  this.vel = p5.Vector.random2D();
  this.acc = createVector(0,0);
  this.maxSpeed = 4;
  this.prevPos = this.pos.copy();



  this.update = function(){
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.mult(0);

  }
  this.applyForce = function(vectors){
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * scl;
    this.acc.add(vectors[index]);
  }

  this.show = function(){
    line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
    this.prevPos = this.pos.copy();
  }

  this.edges = function(){
    if(this.pos.x > width) {
      this.pos.x = 0;
      this.prevPos.x = 0;
    }
    if(this.pos.x < 0){
     this.pos.x = width;
     this.prevPos.x = width;
   }
    if(this.pos.y > height) {
      this.pos.y = 0;
      this.prevPos.y = 0;
    }
    if(this.pos.y < 0) {
      this.pos.y = height;
      this.prevPos.y = height;
    }
  }
}
