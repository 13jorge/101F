class SWORD {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }
  display1() {
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    fill('#D41B0B');
    beginShape();
    vertex(120 - 120, 380 - 240);
    curveVertex(100 - 120, 340 - 240);
    curveVertex(100 - 120, 320 - 240);
    curveVertex(80 - 120, 280 - 240);
    curveVertex(120 - 120, 240 - 240);
    curveVertex(160 - 120, 280 - 240);
    curveVertex(140 - 120, 320 - 240);
    vertex(140 - 120, 340 - 240);
    endShape(CLOSE);
    pop();
  }

  display2() {
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    fill('#D41B0B');
    beginShape();
    vertex(120 - 120, 380 - 120);
    curveVertex(100 - 120, 340 - 120);
    curveVertex(100 - 120, 320 - 120);
    curveVertex(80 - 120, 280 - 120);
    curveVertex(110 - 120, 240 - 120);
    curveVertex(80 - 120, 200 - 120);
    curveVertex(100 - 120, 160 - 120);
    curveVertex(100 - 120, 140 - 120);
    curveVertex(120 - 120, 100 - 120);
    curveVertex(140 - 120, 140 - 120);
    curveVertex(140 - 120, 160 - 120);
    curveVertex(160 - 120, 200 - 120);
    curveVertex(130 - 120, 240 - 120);
    curveVertex(160 - 120, 280 - 120);
    curveVertex(140 - 120, 320 - 120);
    vertex(140 - 120, 340 - 120);
    endShape(CLOSE);
    pop();

  }
  move() {
    this.rotation++;
    if(this.yPos<= height * 1.3){
    this.yPos += 2;
   }else {
   this.yPos=-height * .15;
   }
 }

}
