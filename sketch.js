let angle = 250;
let angle2 = 250;
let size = 460
let angleR = 0;
let angleG = 0;
let angleB = 0;
let angleA = 0;
let acc = 0;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);
}

function draw() {
  angleR += 0.3;
  angleG += 0.1;
  angleB += 0.2;
  angleA += 0.125;


  if(size < 0 ) {
  angleR += 0.1;
  angleG += 0.2;
  angleB += 0.1;
  angleA += 0.025;
  }
  
  //Sin Value Variables
  let sinValR = sin(angleR);
  let sinValG = sin(angleG);
  let sinValB = sin(angleB);
  let sinValA = sin(angleA);

  //Mapping sin value and color range
  let r = map(sinValR, -1, 1, 0, 255);
  let g = map(sinValG, -1, 1, 0, 255);
  let b = map(sinValB, -1, 1, 0, 255);
  let a = map(sinValA, -1, 1, 0, 255);

//Circle speed
  angle += 0.05;
  angle2 += -0.01;

  let sinValueX = sin(angle);
  let sinValueY = cos(angle);
  
  let sinValueX2 = sin(angle2);
  let sinValueY2 = cos(angle2);

  //Circle position and movements
  let xPos = map(sinValueX, -1.1, 1, 0, width);
  let yPos = map(sinValueY, -1.1, 1, 0, width);

  let x2 = map(sinValueX2, 1.1, -1, 0, width);
  let y2 = map(sinValueY2, 1.1, -1, 0, width);

  //Circle Size
  size = size - 0.2
  
  if(size < -460 ) {
     size = size + 0.2
  }
  
  if(size >= 460 ) {
     size2 = size - 0.2
  }
  
  fill(r, g, b, a);
  circle(xPos, yPos, size);
 
    // endGif(450);   // stop recording the GIF after 450 frames

}