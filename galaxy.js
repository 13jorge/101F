let stars = [];
let cnv;
let galaxy = [];

let speed;

function setup() {
createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

  if (mouseIsPressed) {
    stroke(map(mouseX, 59, 200, 150, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    // background(backgroundColor);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // backgroundColor-=5;
    galaxy.push([mouseX, mouseY]);
  }
}

function mouseMoved() {
  //stroke has a random color and transparacy
  stroke(random(255), random(255), random(255), random(255));
  //how big the stoke is and is at random from size 1 to 20
  strokeWeight(random(20));
  //creates a point that follows the mouse
  point(mouseX, mouseY);

}
