// http://bl.ocks.org/brendandawes/08a0b5e3867426dad100 (refer to this later, too tired rn)

var colors = [];

function setup() {
createCanvas(800,450, );
noFill();
addColors();
smooth(10);
background(0);
noLoop();
}

function addColors() {
  var c;
  c = color (92, 250, 245);
  colors[0] = c;
  c = color (250, 61, 67);
  colors[1] = c;
  c = color (241, 255, 27);
  colors[2] = c;
  c = color (154, 255, 134);
  colors[3] = c;
  c = color (255, 255, 255);
  colors[4] = c;
  c = color (152, 17, 255);
  colors[5] = c;
}

function getRandomColor() {
  var i = Math.floor(random(colors.length));
  var c = colors[i];
  return c;
}

function draw() {
  makeRibbons();
}

function makeRibbons() {
  for (var i=0; i < random(10)+2; i++) {
    var strokeW = random(5)+3;
    var amount = 500;
    var frequency = random(1.0)/15;
    var offset = random(200)+5;
    var col = getRandomColor();
    strokeWeight(strokeW);
    stroke(col,180);
    var startY = height/2;
    beginShape();
    vertex(0, startY);
    for (var c=1; c < amount; c++) {
      var sinoffset = sin(frequency*c);
      var sinX = c*(width/amount);
      var sinY = startY + (sinoffset*offset);
      bezierVertex(sinX,sinY,sinX,sinY-1,sinX,sinY);
    }
    endShape();
  }
}
