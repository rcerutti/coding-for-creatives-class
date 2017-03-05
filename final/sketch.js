var ship;
var head = [];
var oranges = [];
var wallpaper;
var mexican;
var trump = [];
//var trump;

function preload(){
  wallpaper = loadImage('images/wallpaper-mario.jpg');
  mexican = loadImage('images/mexican.png');
  trump[0] = loadImage('images/trump0.png');
  trump[1] = loadImage('images/trump1.png');
  trump[2] = loadImage('images/trump2.png');
  trump[3] = loadImage('images/trump3.png');
  trump[4] = loadImage('images/trump4.png');
  trump[5] = loadImage('images/trump5.png');
    // for (var i = 0; i < 6; i++){
    //   trump[i] = loadImage('images/trump' + i + '.png');
    // }  
}

//[trump0, trump1, trump2, trump3, trump4, trump5]

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    head[i] = new Head(i*80+80, 10, i);
  }
}

function draw() {
  background(wallpaper);
  ship.show();
  ship.move();

  for (var i = 0; i < oranges.length; i++) {
    oranges[i].show();
    oranges[i].move();
    for (var j = 0; j < head.length; j++) {
      if (oranges[i].hits(head[j])) {
        head[j].change();
        oranges[i].evaporate();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < head.length; i++) {
    head[i].show();
    head[i].move();
    if (head[i].x > width || head[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < head.length; i++) {
      head[i].shiftDown();
    }
  }

  for (var i = oranges.length-1; i >= 0; i--) {
    if (oranges[i].toDelete) {
      oranges.splice(i, 1);
    }
  }


}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var orange = new Orange(ship.x+50, height);
    oranges.push(orange);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}