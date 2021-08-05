var box 
function setup() {
  createCanvas(500,500);
box = createSprite(250,250,50,50);


}

function draw() 
{
  background("green");
if(keyIsDown(RIGHT_ARROW)) {

box.x=box.x+5;

}
if(keyIsDown(LEFT_ARROW)) {

box.x=box.x-5;

}

drawSprites()
}




