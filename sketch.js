var screen = 0;
var font;
var button;
//counters
  var score = 0;
  var songTime = 182; //song length = 3min., 2sec. -> 182000 ms -> 182 sec
  var countDown;    //time limit - amount of time passed
//mp3
  var song, intro;
//music note hits
  var right, left, mid; //positions
  var cursor, droplet;  //assets
//backgrounds
  var startup, stage, end;
//loaction of cloud spawn
  var x = -20;
  var y = 200;

function preload(){
  //songs/tune
    song = loadSound("sounds/Happy_Little_Clouds.mp3");
    intro = loadSound("sounds/screen_intro.mp3");
  
  //images
    startup = loadImage("images/bob_ross.jpeg");
    stage = loadImage("images/canvas.jpeg");
    cursor = loadImage("images/bob_ross_head.gif");
    droplet = loadImage("images/cloudy_icon.gif");
    end = loadImage("images/end.jpg");
    counter = loadImage("images/score_counter.gif");

  //text
    font = loadFont("text/CaveatBrush-Regular.ttf");
}

function setup() {
  createCanvas(1200, 630);
  frameRate(60); //sets number of frames displayed

  /*
    // Create play button
    playButton = createButton('PLAY');
    playButton.position(250, 475);
    playButton.size(140, 100);
    playButton.mousePressed(playIT);
    */
}

function draw() {
  //Screen Switch
    if(screen == 0){
      startScreen();
    } else if(screen == 1){
      playIT();
    } else if (screen == 2 || countDown < 0){
      countDown = 0;
      endScreen();
    }
}

/*
function changeSceen(){
  screen = 1;
}
*/

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
    button.position(320, 475);
    button.size(140, 100);
    button.mousePressed(intro.play());
    button.mousePressed(playIT);

  //scoreBoard();
  //playIT();
  //endScreen();

  reset();
}

function playIT(){
  background(stage);
  song.play();
  //setVolume(0.5);

  /*
  if (!song.isPlaying()){
    song.play();
  }
  */

  //score/timer area
    image(counter, width/2 - 190, 10, 400, 200);

  //live score
    textSize(75);
    text("score = " + score, width/2 - 100, 160);
  //Timer
    timer();
    textSize(50);
    fill('red');
    text("Time = " + countDown, width/2 - 90, 100);

      if (screen == 2 || countDown < 0){
        countDown = 0;
        endScreen();
      }
    
  //catcher
    image(cursor, mouseX, height-50, 50, 50);

    //once cloud hits Bob increase score
      if (y > height-50 && x > mouseX-20 && x< mouseX+20){
        score += 1;
      }
    
  //makes sure button on start screen loads player into playIT
    screen = 1;
    buttonState = "active";
    playButton.hide();
    playAgainButton.hide();
    //button.hide();
}

function endScreen(){
  background(end);
  screen = 2;


  //Text
    textSize(150);
    textAlign(CENTER);
    text('GAME OVER', 570, 180);
    text("Final Score = " + score, 555, height/2 + 25);

  //Button
    button = createButton('PLAY AGAIN?');
    button.position(500, 485);
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

function reset(){
  score = 0;
  speed = 2;
  y = -20;
}

function timer(){
    //convert  ms to sec
      var currentTime = int(millis() / 1000);
    //Counts numbers down
      countDown = songTime - currentTime;
}

/*
function mousePressed(){
  if(screen == 0){
    screen = 1;
  } else if (screen == 2) {
    screen == 0;
  }
}
*/