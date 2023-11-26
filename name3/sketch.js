function setup () {
createCanvas (400, 400); background (230);
}

function draw() {
circle (width/2, height/2,50) 
  fill (225)
  
  translate(width/2, height/2)
for (let a=0; a<35; a++) {
s = 350 - 10*a;
fill (s, s, 20);
rotate (0.003*frameCount)
circle (mouseX, 0, s) ;
}

for (let i=0; i<200; i++) {
  let c = 200- 0.01*i;
circle(width/2, height/2,c);
rotate (0.1);
let g = random(0, 255);
fill (8, 10,123,0);
}
}