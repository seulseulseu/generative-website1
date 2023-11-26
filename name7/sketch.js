function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  for (let i=0; i <10; i ++){
    

  let randSize = (abs(mouseX-width/2)+ abs(mouseY-height/2))*0.2;
  let yy = random(randSize);
  let randFill = (abs(mouseX-width/2)+ abs(mouseY-height/2))*0.2;
  randFill = map( randSize, 20, 40, 255, 0 );
  let r = random(randFill);
  let g = random(0);
  let b = random(0);
  fill(r, g, b, 20)
  noStroke();
  circle(mouseX, mouseY, yy);
  
  }
}