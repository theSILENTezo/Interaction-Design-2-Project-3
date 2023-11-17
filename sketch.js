var song;
var intro;
var stage;
var right;
var left;
var startup;

function preload(){
  song = loadSound("sounds/Happy_Little_Clouds.mp3");
  intro = loadSound("sounds/screen_intro.mp3");
  startup = loadSound("images/bob_ross.jpeg");
  stage = loadImage("images/canvas.jpeg");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
}

function playIT(){

}