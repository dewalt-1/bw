let pic;

function preload() {
  pic = loadImage('bill.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {  
  pic.loadPixels();
  for (let y=0; y<pic.height; y++) {
    for (let x=0; x<pic.width; x++) {
      let px = pic.get(x, y);
      let r = px[0];
      let g = px[1];
      let b = px[2];
      let bright = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
      pic.set(x, y, color(bright));
    }
  }
  pic.updatePixels();
  image(pic, 0, 0);
}