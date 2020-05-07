let glitchlen = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {

  // update screen
  if(frameCount%60==0){

    // new background
    background(random(255), random(255), random(255));
    // new colored circle
    fill(random(255), random(255), random(255));
    rect(width/2, height/2, 300, 300);


    // random glitch pixel length
    glitchlen = int(random(4,2400))*4;
    // edit the pixels array
    loadPixels();
    // channel shift?
    let channelshift = int(random(0,4));
    // loop over chunks
    for(let i=pixels.length/2; i<pixels.length-glitchlen; i=i+glitchlen){
      // set all pixels in chunk to color of the first pixel
      for(let p=channelshift; p<glitchlen; p+=4){
        pixels[i+p] = pixels[i];
        pixels[i+p+1] = pixels[i+1];
        pixels[i+p+2] = pixels[i+2];
        //pixels[i+p+3] = pixels[i+3];
      }
    }
    updatePixels();
  }
  push();
  fill(255);
  text(glitchlen, width/2, height/2);
  pop();
}
