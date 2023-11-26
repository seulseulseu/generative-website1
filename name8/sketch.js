function setup() { createCanvas(400, 400);
 }

function draw() {
  print('mouseIsPressed','mouseIsPressed');
circle (mouseX+random(-5, 5), mouseY+random(-5, 5), random(10)); }
function mousePressed() {
background(random(250), random(255), random(255)); }
function draw() {
  print('mouseIsPressed', mouseIsPressed);
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
    rect(mouseX + random(-10, 10), mouseY + random(-10, 10), random(10, 30), random(10, 30));
  } else {
    fill(random(255), random(255), random(255));
    circle(mouseX + random(-5, 5), mouseY + random(-5, 5), random(10));
  }
}