var x = 0;
var y = 0;
var xspeed = 10;
var yspeed = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0);
}

function mousePressed (){
	yspeed =+ 2;
	xspeed =+ 10;
}

function draw() {
	//distance from center of the screen
	var d = dist(x+1, y+1, 0, 0);

  	fill (random(80, 250), random(200, 80), random(200, 80));
  	//ellipse (x, y, d, d);
	ellipse (x, y, 50, 50);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}

