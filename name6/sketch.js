function setup() {
    createCanvas(windowWidth, windowHeight);
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  let s = random(5, 100);
  let color1 = 255*(mouseX/600);
  let color2 = 255-color1;
  noFill();
  
  background(0,0,5);
 strokeWeight(4.0);
  translate(width/2, height/2);
  
  for (let j = 0; j<13; j++){
  for (let i = 0; i<7 ; i++) {
    ellipse(5 + 10*i, 5+ 50, 30, 420);      
    stroke(color1,0,color2, 27);
    rotate(0.001*frameCount);
    
}
  }
  
}
