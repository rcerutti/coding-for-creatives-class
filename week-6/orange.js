function Orange(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(244, 143, 66);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(head) {
    var d = dist(this.x, this.y, head.x, head.y);
    if (d < this.r + head.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 5;
  }

}