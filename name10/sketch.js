let xx;
let yy;
let a = 0;
let img;
let b = 0;
let dd = 20;
let myimg = 1
function preload() {
  img = loadImage(myimg + ".jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //pixelDensity(1)
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  // console.log(mouseX)
  //lights()
  imageMode(CENTER)
  background(0);
  //orbitControl(10)

  img.loadPixels();

  for (let y = 0; y < 300; y = y + 2) {
    for (let x = 0; x < 245; x = x + 2) {
      let idx = parseInt(x + y * img.width);
      let r = img.pixels[idx * 4];
      let g = img.pixels[idx * 4 + 1];
      let b = img.pixels[idx * 4 + 2];
      let gr = (r + g + b) / 3;

      let dd = dist(mouseX, mouseY, x * 2.1, y * 2.1)

      let xx = 0.015 * dd * cos(radians(b * frameCount * 0.03));
      let yy = 0.015 * (dd + 30) * sin(radians(b * frameCount * 0.02));
      gr = 255 - gr
      if (gr > 0) {
        push()

        translate(-275, -300, 50)
        translate(x * 2.1 + 5 + xx, y * 2.1 + 5 + yy, gr * xx * 0.2)
        fill(r - 10, g - 10, b - 10)
        noStroke()
        sphere(r * 0.009);
        // rect(x*2.1+5+yy,y*2.1+5+xx,gr*0.01);   
        pop()


      }

    }

  }


}
function changeImage1() {
  myimg = 1;
  img = loadImage(myimg + ".jpg");
}

function changeImage2() {
  myimg = 2;
  img = loadImage(myimg + ".jpg");
}
function changeImage3() {
  myimg = 3;
  img = loadImage(myimg + ".jpg");
}
function changeImage4() {
  myimg = 4;
  img = loadImage(myimg + ".jpg");
}
function changeImage5() {
  myimg = 5;
  img = loadImage(myimg + ".jpg");
}
function changeImage6() {
  myimg = 6;
  img = loadImage(myimg + ".jpg");
}

function changeImage7() {
  myimg = 7;
  img = loadImage(myimg + ".jpg");
}