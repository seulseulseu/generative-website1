let words = ["크기와", "  색의", "  변화", "  반복", "강지현","권나경", "권채현", "김로영", "김민주", "김성희", "김예영", "변민경", "박언진", "성슬기", "이연호", "한세흔", "황예인"];
let index = 0;
let a = 1;
let font;
let dot;
let angle;
let increment =0;
let incrementAngle = 0;
function preload() {
  //Cormorant-Bold.ttf
  //DMSerifDisplay-Regular.ttf
  font = loadFont('NotoSerifKR-Light.otf')
}

function mousePressed() {
  index = index + 1;
  frameCount = 0;
  if (index == words.length) {
    index = 0;
  } dot = font.textToPoints(words[index], -160, 80, 500, { sampleFactor: 0.2 });
} 

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  dot = font.textToPoints(words[index], -160, 80, 500, { sampleFactor: 0.2 })
  // textSize(129);
  background(0)

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}
function draw() {
  background(255)
  // orbitControl(5)
  //textAlign(CENTER)

  //translate(windowWidth / 2 - 550, windowHeight / 2 + 100)
  translate(- 550, 100, 0)


  increment += 0.019;
  incrementAngle = sin(increment);

  for (let i = 0; i < dot.length; i++) {


    //noFill()
    //fill(0)
    //let b = cos(i)*i*0.1
    //let aa = sin(i*0.1)*i
    let angle = noise(i + frameCount * 0.001, i + frameCount * 0.002, i + frameCount * 0.01) * PI * 2.0;



    push()
    let p = dot[i];

    let c = cos(angle + i) * 26 * incrementAngle;
    let s = sin(angle + i) * 26 * incrementAngle;
    let myColor = map(c, -20, 20, 50, 300)
    let myColor2 = map(s, -20, 20, 50, 300)
    let myColor3 = map(angle, 0, 12, 50, 300)
    //rotateX(frameCount*0.15+angle*0.2)
    translate(p.x + c, p.y + s, i * 0.03 - 60, 0)
    // console.log(angle)
    // let myColor = random(300);
    //stroke(0);
    //stroke(255);
    stroke(myColor, myColor2, myColor3);
    strokeWeight(1.5)
    noFill();
    circle(0, 0, (c + s))

    //console.log(frameCount)
    pop()
    /* if(frameCount>350){
       frameCount=0;
     }*/
  }
  //a=a+1;
}