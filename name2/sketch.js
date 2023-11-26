let phase = 0;
function setup() {
  createCanvas(700, 700);
  noiseSeed(70);
  angleMode(DEGREES);
}

function keyPressed(){
if (key ==" "){
    saveGif(beesandbomb.gif,5);
    }
}
function draw() {
  background(220);
  translate(width/2, height/2);

  noFill();
  for (let i=0; i<=360; i=i+1) {
    beginShape();
    for (let d = 1; d<=180; d+=5) {
      let x = d*cos(i);
      let y = d*sin(i);
      let h = noise(x*0.0071 + phase, y*0.0089 + phase)*80 - 40;
      let k = noise(x*0.0073 -phase*0.87, y*0.0081 + phase*0.018)*80 - 40;
      curveVertex(x+h, y+k);
    }
    endShape();
    
    x = frameCount / 500;
  }
  phase += 0.003;


  
}