let x,y;
let xspeed = 0.8;
let yspeed = 0.8;
let r = 2.5;

function preload(){
  font = loadFont('/src/assets/hell-med.ttf');
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  x = random(r, width - r);
  y = random(r, height - r);
  textAlign(CENTER, CENTER);
  textSize(min(windowWidth, windowHeight) * 0.1);
}
function draw(){
  background(0);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  fill(255);
  textFont(font);
  text("DESIRE PATHS", width / 2, height / 2);
  blendMode(DIFFERENCE);

  stroke(255);
  strokeWeight(2);
  line(x, y, mouseX, mouseY);
  // blendMode(BLEND); //to be or not to be 
  circle(mouseX, mouseY, 5);
}