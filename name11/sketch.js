let centerX;
let centerY;
let numColumns = 30;
let numRows = 30;
let margin = 10;

function setup() {
  createCanvas(600, 600);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(220);

  let angle = atan2(mouseY - centerY, mouseX - centerX);
    let distance = dist(centerX, centerY, mouseX, mouseY);

  let size = map(distance, 0, width, 10, 100);
   let rotation = map(angle, -PI, PI, 0, 360);

  for (let i = 0; i < numColumns; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = centerX - (numColumns * margin) / 2 + i * margin;
       let y = centerY - (numRows * margin) / 2 + j * margin;

      translate(x, y);
     rotate(rotation * (PI / 180));

   noFill();
    stroke(0);

      beginShape();
      vertex(0, -size / 2);
      vertex(size / 2, 0);
      vertex(0, size / 2);
      vertex(-size / 2, 0);
      endShape(CLOSE);

      resetMatrix();
     }
  }
}