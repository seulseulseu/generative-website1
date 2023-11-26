let ggg = 50;
let len = 3;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0,0,0);
  rectMode(CENTER)
  noFill();
  stroke(190,100,100,250);
  translate(width/2, height/2);
  let arcSize = map(mouseX, 0, width, 0, 2*PI);
  for (let i=0; i< 15; i++) {
    rotate(i/2 + frameCount/20)
    let sw = 0.5 + 0.12 * i;
    strokeWeight(i* 0.35);
    let s = 350 - 10*1;
    arc (0, 0,100 + i*20,100 + i*20, 0, arcSize);
  
  }
}