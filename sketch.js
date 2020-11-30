var hor,hr,mn,sc;
var hrAngle, mnAngle, scAngle;


function setup() {
  createCanvas(1600,800);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  translate(800,400);
  
  hor = hour();
  hr = hor%12;
  mn = minute();
  sc = second();

  scAngle = map(sc, 0 , 60, 0 , 360);
  mnAngle = map(mn, 0 , 60, 0 , 360);
  hrAngle = map(hr, 0 , 24, 0 , 360);

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,90,0);
  pop();
  push();
  stroke(255,0,0);
  strokeWeight(7);
  noFill();
  arc(0,0,380,380,270,hrAngle);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop();
  push();
  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,400,400,270,mnAngle);
  pop();

  push();
  rotate(scAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,150,0);
  pop();
  push();
  stroke(0,0,255);
  strokeWeight(7);
  noFill();
  arc(0,0,420,420,270,scAngle);
  pop();
}