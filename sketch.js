var screen = 0;
var font;
var button;
var score = 0;
//mp3
  var song, intro;
//music note hits
  var right, left, mid; //positions
  var cursor, droplet;  //assets
//backgrounds
  var startup, stage, end;

function preload(){
  //songs/tune
    song = loadSound("sounds/Happy_Little_Clouds.mp3");
    intro = loadSound("sounds/screen_intro.mp3");
  
  //images
    startup = loadImage("images/bob_ross.jpeg");
    stage = loadImage("images/canvas.jpeg");
    cursor = loadImage("images/bob_ross_head.jpg");
    droplet = loadImage("images/cloudy_icon.gif");
    end = loadImage("images/end.jpg");

  //text
    font = loadFont("text/CaveatBrush-Regular.ttf");
}

function setup() {
  createCanvas(1200, 630);
}

function draw() {
  if(screen == 0){
    startScreen();
  } else if(screen == 1){
    playIT();
  } else if (screen == 2){
    endScreen();
  }
}

function startScreen(){
  background(startup);
  
  //Title
    fill(237, 198, 24);
    textFont(font);
    textSize(150);
    text('Happy Cloud', 5, 200);
    text('Catcher', 100, 330);

  //button
    button = createButton('PLAY');
    button.position(250, 375);
    button.size(140, 100);
    button.mousePressed(playIT);

  scoreBoard();
}

function playIT(){
  background(stage);
  song.play();

  text("score =" + score, 40, 70);

  //image(cursor, mouseX, height-10);
}

function endScreen(){
  background(end);

  //Text
    textAlign(CENTER);
    text('GAME OVER', width/2, height/2);
    text("Final Score =" + score, width/2 + 25, height/2 + 25);

  //Button
    button = createButton('PLAY AGAIN?');
    button.position(250, 375);
    button.size(140, 100);
    button.mousePressed(playIT);
}

function spawnClouds(){
   //image(droplet, x, y);
}

/*
function button.mousePressed(){
  if(screen == 0){
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
  }
}
*/

function scoreBoard(){
  score = 0;
  speed = 2;
  y = -20;
}