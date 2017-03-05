function Head(x, y, num) {
  this.x = x;
  this.y = y;
  this.r = 0;
  this.xdir = 2;
  this.n = num;



  this.change = function() {
    //this.r = this.r - 5;
    //this.r = image(trump[5]);
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    image(trump[this.n], this.x, this.y, this.r*2, this.r*2);
    //image(trump[floor(random(trump.length))], this.x, this.y, this.r*2, this.r*2);
  
  }

}
