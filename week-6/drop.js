function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 3;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(255);
    rect(this.x, this.y, this.r*2, this.r*2);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(flower) {
    var d = dist(this.x, this.y, flower.x, flower.y);
    if (d < this.r + flower.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 5;
  }

}