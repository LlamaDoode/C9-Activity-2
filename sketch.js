var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,100,50,100) ;
  box.shapeColor="blue" ;
}

function draw() 
{
  background("red") ;

  if (keyDown(RIGHT_ARROW)) {
    box.x = box.x+1 ;
  }

  if (keyDown(LEFT_ARROW)) {
    box.x = box.x-1 ;
  }

  if (keyDown(UP_ARROW)) {
    box.y = box.y-1 ;
  }

  if (keyDown(DOWN_ARROW)) {
    box.y = box.y+1 ;
  }
  drawSprites() ;
}




