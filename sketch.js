
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  rect3 = createSprite(200,200,80,30);
  rect3.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect3)){
    
    movingRect.shapeColor = "blue";
    rect3.shapeColor = "blue";

    
  }
  
  else if(isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue"

  
  }
else {
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
   rect3.shapeColor = "green";
}

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




