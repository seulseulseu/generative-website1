function setup() {
  createCanvas(600, 600);
}

function draw() {
background(255, 20);
  let frameRe = frameCount%200;
 for (let i=0; i<10; i++){
   noStroke();
     
if (frameRe>20){
     let x = random(10, width-420);
     let y = random(10, height-410);
     let s = random(1, 15);
     fill(255, 111, 97);
     circle(x, y, s);
} 
  
if (frameRe>40){
     x1 = random(200, width-220);
     y1 = random(10, height-410);
     x2 = random(200, width-220);
     y2 = random(10, height-410);
     x3 = random(200, width-220);
     y3 = random(10, height-410);
     fill(69, 181, 170);
     triangle(x1, y1, x2, y2, x3, y3);
}
  
if (frameRe>60){
     x = random(580, width-200);
     y = random(10, height-410);
     s = random(5, 43);
     fill(245, 233, 77);
     circle(x, y, s);
}

if (frameRe>80){   
     x1 = random(10, width-420);
     y1 = random(210, height-210);
     x2 = random(10, width-420);
     y2 = random(210, height-210);
     x3 = random(10, width-420);
     y3 = random(210, height-210);
    fill(191, 25, 50);
    triangle(x1, y1, x2, y2, x3, y3);
}
 
if (frameRe>100){   
     x = random(200, width-220);
     y = random(210, height-210);
     s = random(5, 43);
     fill(0, 148, 115);
     circle(x, y, s);
}
 
if (frameRe>120){
     x1 = random(580, width-200);
     y1 = random(210, height-210);
     x2 = random(580, width-200);
     y2 = random(210, height-210);
     x3 = random(580, width-200);
     y3 = random(210, height-210);
     fill(249, 192, 90);
     triangle(x1, y1, x2, y2, x3, y3);
}
   
if (frameRe>140){
     x = random(10, width-420);
     y = random(590, height-190);
     s = random(5, 43);
    fill(173, 94, 153);
    circle(x, y, s);
}
   
if (frameRe>160){
     x1 = random(200, width-220);
     y1 = random(590, height-190);
     x2 = random(200, width-220);
     y2 = random(590, height-190);
     x3 = random(200, width-220);
     y3 = random(590, height-190);
     fill(15, 76, 129);
     triangle(x1, y1, x2, y2, x3, y3);
}

if (frameRe>180){
     x = random(580, width-200);
     y = random(590, height-190);
     s = random(1, 15);
     fill(248, 148, 6);
     circle(x, y, s);
}
   
   
 }
}
