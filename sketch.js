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
    startup = loadSound("images/bob_ross.jpeg");
    stage = loadImage("images/canvas.jpeg");
    cursor = loadImage("images/bob_ross_head.jpg");
    droplet = loadImage("images/cloudy_icon.gif");

  //text
    font = loadFont("text/CaveatBrush-Regular.ttf");

  
}

function setup() {
  createCanvas(800, 800);
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
  fill(237, 198, 24);
  textFont(font);
  text('Happy Cloud Catcher', width/4, height/4);

  button = createButton('PLAY');
}

function playIT(){
  //song.play();


  background(stage);
  text("score =" + score, 40, 70);

  image(droplet, x, y);
  image(cursor, mouseX, mouseY);
}

function endScreen(){
  background();


}

function placeCloud(){
  let 
}

function mousePressed(){
  if(screen == 0){
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
  }
}

function scoreBoard(){
  score = 0;
  speed = 2;
  y = -2;
}