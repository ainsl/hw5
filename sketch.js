// zombie variables
var zombieX = 600;
var zombieY = 400;

var score = 0;

// ball 1 variables
var ballX1 = 0;
var ballY1 = 0;
var ballX1Speed = 12;
var ballY1Speed = 10;

// ball 2 variables
var ballX2 = 200;
var ballY2 = 400;
var ballX2Speed = 14;
var ballY2Speed = 10;

// ball 3 variables
var ballX3 = 400;
var ballY3 = 200;
var ballX3Speed = 15;
var ballY3Speed = 17;

// ball 4 variables
var ballX4 = 600;
var ballY4 = 500;
var ballX4Speed = 19;
var ballY4Speed = 20;

var yellSound;
var screamSound;

function preload() {
  yellSound = loadSound("yellSound.wav");
  screamSound = loadSound("screamSound.m4a");
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(50, 74, 39, 150);
  
  textFont('Courier');
  fill(255);
  textSize(18);
  text("Score = " + score, 20, 30);
  
  // draw ball 1
  fill(0);
  ellipse(ballX1, ballY1, 50);
  ballX1 = ballX1 + ballX1Speed;
  ballY1 = ballY1 + ballY1Speed;
  
  // ball 1 movement
  if (ballX1 > width) {
   ballX1Speed = -ballX1Speed; 
  }
  
  if (ballX1 < 0) {
   ballX1Speed = -ballX1Speed; 
  }
  
  if (ballY1 > height) {
   ballY1Speed = -ballY1Speed; 
  }
  
  if (ballY1 < 0) {
   ballY1Speed = -ballY1Speed; 
  }
  
  
  // draw ball 2
  fill(255, 0, 0);
  ellipse(ballX2, ballY2, 50);
  ballX2 = ballX2 + ballX2Speed;
  ballY2 = ballY2 + ballY2Speed;
  
  // ball 2 movement
  if (ballX2 > width) {
   ballX2Speed = -ballX2Speed; 
  }
  
  if (ballX2 < 0) {
   ballX2Speed = -ballX2Speed; 
  }
  
  if (ballY2 > height) {
   ballY2Speed = -ballY2Speed; 
  }
  
  if (ballY2 < 0) {
   ballY2Speed = -ballY2Speed; 
  }
  
  
  // draw zombie
  zombie(zombieX, zombieY);
  
  
  // user input
  if (keyIsDown(LEFT_ARROW)) {
    zombieX = zombieX - 8;
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    zombieX = zombieX + 8;
  }
  
  if (keyIsDown(UP_ARROW)) {
    zombieY = zombieY - 8;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    zombieY = zombieY + 8;
  }
  
  
  // game logic
  if (zombieX < 75) {
    zombieX = 75;
  }
  
  if (zombieX > width - 75) {
    zombieX = width - 75;
  }
  
  if (zombieY > height - 80) {
    zombieY = height - 80;
  }
  
  if (zombieY < 80) {
    zombieY = 80;
  }
  
  // catch ball
  if (dist(zombieX, zombieY, ballX1, ballY1) < 50) {
    score += 1;
    screamSound.play();
    }
  
  if (score > 10) {
    // draw ball 3
    fill(255, 0, 0);
    ellipse(ballX3, ballY3, 50);
    ballX3 = ballX3 + ballX3Speed;
    ballY3 = ballY3 + ballY3Speed;
  
    // ball 3 movement
    if (ballX3 > width) {
     ballX3Speed = -ballX3Speed; 
    }
  
    if (ballX3 < 0) {
     ballX3Speed = -ballX3Speed; 
    }
  
    if (ballY3 > height) {
     ballY3Speed = -ballY3Speed; 
    }
  
    if (ballY3 < 0) {
     ballY3Speed = -ballY3Speed; 
    }
    
    if (dist(zombieX, zombieY, ballX3, ballY3) < 50) {
    noLoop();
      
    yellSound.play();
    
    fill(255, 0, 0);
    rect(0, 0, width, height);
    
    fill(0);
    textAlign(CENTER);
    textSize(64);
    text("Game Over.", width/2, height/2);
    
    textSize(24);
    text("Score = " + score, width/2, height-350);
  }
  }
  
    if (score > 18) {
    // draw ball 4
    fill(255, 0, 0);
    ellipse(ballX4, ballY4, 50);
    ballX4 = ballX4 + ballX4Speed;
    ballY4 = ballY4 + ballY4Speed;
  
    // ball 4 movement
    if (ballX4 > width) {
     ballX4Speed = -ballX4Speed; 
    }
  
    if (ballX4 < 0) {
     ballX4Speed = -ballX4Speed; 
    }
  
    if (ballY4 > height) {
     ballY4Speed = -ballY4Speed; 
    }
  
    if (ballY4 < 0) {
     ballY4Speed = -ballY4Speed; 
    }
      
    if (dist(zombieX, zombieY, ballX4, ballY4) < 50) {
    noLoop();
      
    yellSound.play();
    
    fill(255, 0, 0);
    rect(0, 0, width, height);
    
    fill(0);
    textAlign(CENTER);
    textSize(64);
    text("Game Over.", width/2, height/2);
    
    textSize(24);
    text("Score = " + score, width/2, height-350);
  }
  }
  

    if (dist(zombieX, zombieY, ballX2, ballY2) < 50) {
    noLoop();
      
    yellSound.play();
    
    fill(255, 0, 0);
    rect(0, 0, width, height);
    
    fill(0);
    textAlign(CENTER);
    textSize(64);
    text("Game Over.", width/2, height/2);
    
    textSize(24);
    text("Score = " + score, width/2, height-350);
  }
  
}

  function zombie(x, y) {
    
  noStroke();
    
  //pink
  fill(255, 154, 185);
  rect(x-75, y-50, 10, 40);
  rect(x-65, y-70, 50, 20);
  rect(x-35, y-80, 10, 10);
  rect(x-65, y-50, 40, 10);
  rect(x-65, y-40, 20, 30);
  rect(x-45, y-30, 10, 10);
  rect(x-65, y-10, 10, 10);
  rect(x+35, y-80, 10, 10);
  rect(x+25, y-70, 30, 10);
  rect(x+35, y-60, 20, 10);
  
  //green
  fill(135, 168, 111);
  rect(x-25, y-80, 60, 10);
  rect(x-15, y-70, 40, 20);
  rect(x+25, y-60, 10, 10);
  rect(x-25, y-50, 90, 10);
  rect(x+35, y-40, 30, 10);
  rect(x+35, y-30, 10, 80);
  rect(x-45, y-40, 30, 10);
  rect(x-35, y-30, 20, 55);
  rect(x-45, y+25, 15, 15);
  rect(x-45, y-20, 10, 45);
  rect(x-55, y-10, 10, 40);
  rect(x-15, y+20, 40, 20);
  rect(x-15, y+40, 30, 20);
  rect(x-5, y+60, 30, 10);
  
  //red
  fill(173, 26, 58);
  rect(x-30, y+25, 20, 15);
  rect(x+10, y+70, 10, 10);
  
  //green 
  fill(135, 168, 111);
  rect(x+5, y+70, 5, 10);
  rect(x+20, y+70, 35, 10);
    
  //black
  fill(0);
  rect(x+25, y+30, 30, 40);
  rect(x+15, y+40, 10, 20);
    
  //green
  fill(135, 168, 111);
  rect(x+25, y+10, 40, 20);
    
  //black
  fill(0);
  rect(x+40, y+15, 5, 5);
  rect(x+50, y+15, 5, 5);
    
  //yellow
  fill(255, 249, 191);
  rect(x-15, y-40, 50, 60);
  rect(x+45, y-30, 30, 40);
    
  //red
  fill(173, 26, 58);
  rect(x+5, y-15, 10, 10);
  rect(x+55, y-15, 10, 10);
    
  //yellow
  fill(255, 249, 191);
  rect(x+30, y+30, 10, 10);
  rect(x+45, y+30, 10, 15);
  rect(x+55, y+30, 10, 10);
  rect(x+30, y+60, 10, 10);
  rect(x+45, y+55, 10, 15);

  }
