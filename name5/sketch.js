let img;
let pixelSize=6;

let Radius=30;
let angleStep=0.07;

function preload() {
  let imageUrl="https://ojsfile.ohmynews.com/STD_IMG_FILE/2008/0122/IE000860343_STD.jpg";
  img=loadImage(imageUrl);
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  background(0);
  img.loadPixels();

  const halfPixelSize= pixelSize/2;

  for(let y=0; y<img.height; y+=pixelSize) {
    for(let x=0; x<img.width; x+=pixelSize) {
      let idx = (x + y * img.width) * 4;
      let r= img.pixels[idx];
      let g= img.pixels[idx + 1];
      let b= img.pixels[idx + 2];

      let distortion= calculateDistortion(x, y);
      let distortedX= x + distortion.x;
      let distortedY= y + distortion.y;

      fill(r, g, b);
      noStroke();
      circle(distortedX, distortedY, pixelSize);
    }
  }
}

function calculateDistortion(x, y) {
  let centerX= mouseX;
  let centerY= mouseY;

  let distance= dist(x, y, centerX, centerY);
  let angle= atan2(y - centerY, x - centerX);

  let distortionAmount= map(distance, 0, Radius, 0, angleStep);
  let distortedX= cos(angle + distortionAmount) * distance;
  let distortedY= sin(angle + distortionAmount) * distance;

  return createVector(distortedX, distortedY);
}

function mouseWheel(event) {
  let zoomSpeed= 0.01;
  let zoomAmount= event.delta * zoomSpeed * abs(event.delta);

  pixelSize+= zoomAmount * 0.3;
  pixelSize= constrain(pixelSize, 4, 6);

  return false;
}