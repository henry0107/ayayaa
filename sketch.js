let xSlider;
let yslider;
let xspeedslider;
var x;
var y;
var xspeed;
var yspeed;
let button;

let r = 25;

function setup() {
  createCanvas(710, 400);
  xSlider = createSlider(0, 100, 100);
  xSlider.position(20, 20);
  ySlider = createSlider(0, 100, 0);
  ySlider.position(20, 50);
  xspeedSlider = createSlider(0, 100, 255);
  xspeedSlider.position(20, 80);
  yspeedSlider = createSlider(0, 100, 255);
  yspeedSlider.position(20, 115);
  button = createButton('app');
  button.position(20, 145);
  button.mousePressed(changeBG);
}
function changeBG() {
  x = xSlider.value();
  y = ySlider.value();
  xspeed = xspeedSlider.value();
  yspeed = yspeedSlider.value();
}
function draw() {
  background(225);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }


}