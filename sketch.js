var screen = 0;
var font;
var song;
var intro;
var stage;
var right;
var left;
var mid;
var startup;
var button;

function preload(){
  //songs/tune
    song = loadSound("sounds/Happy_Little_Clouds.mp3");
    intro = loadSound("sounds/screen_intro.mp3");
  
  //images
    startup = loadImage("images/bob_ross.jpeg");
    stage = loadImage("images/canvas.jpeg");
    cursor = loadImage("images/bob_ross_head.jpg");
    droplet = loadImage("images/cloudy_icon.gif");

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
}

function playIT(){
  song.play();

  background(stage);
  text("score =" + score, 40, 70);

  image(droplet, x, y);
  image(cursor, mouseX, mouseY);
}

function endScreen(){
  background();


}

function placeCloud(){

}

/*
function mousePressed(){
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
  y = -2;
}