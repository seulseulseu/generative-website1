let minLoopFrames = 150;

function setup() {
  createCanvas(700, 700);
  frameRate(60);
}

function draw() {
  let x = width / 2;
  let y = width / 2;
  let d = width / 6;
  let r = width / 3;
  let n = 800;
  let segs = 20;
  background(0);
  noStroke();
  
  for (let i = 0; i < n; i++) {
    fill(
      300 + 300 * sin(i / n * 800 + TWO_PI * frameCount / minLoopFrames),
      300 + 200 * sin(i / n * 400 + TWO_PI * frameCount / minLoopFrames),
      300 + 300 * sin(i / n * 300 + TWO_PI * frameCount / minLoopFrames * 2)
    );
    circle(
      x + r * sin(TWO_PI * i / n * 2),
      y + r * cos(TWO_PI * i / n * 1),
      d * sin(segs * PI * i / n + TWO_PI * frameCount / minLoopFrames * 2)
    );
  }
}