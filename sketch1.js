var fixed_rect, moving_rect;
var fr_1, fr_2, fr_3, fr_4;
var mr1,mr2,mr3,mr4;

function setup() {
  createCanvas(800,400);

  moving_rect = createSprite(200, 200, 50, 30);
  moving_rect.velocityX=1;

  fixed_rect = createSprite(600, 200, 40, 80);
  
  mr1 = createSprite(100, 400, 50, 50);
  mr2 = createSprite(200, 400, 50, 50);
  mr3 = createSprite(300, 400, 50, 50);
  mr4 = createSprite(400, 400, 50, 50);

  mr1.velocityY=-2;
  mr2.velocityY=-2;
  mr3.velocityY=-2;
  mr4.velocityY=-2;

  fr_1 = createSprite(100, 100, 50, 50);
  fr_2 = createSprite(200, 100, 50, 50);
  fr_3 = createSprite(300, 100, 50, 50);
  fr_4 = createSprite(400, 100, 50, 50);

  fixed_rect.shapeColor = "green";
  moving_rect.shapeColor = "green";

  fr_1.shapeColor = "green";
  fr_2.shapeColor = "green";
  fr_3.shapeColor = "green";
  fr_4.shapeColor = "green";

  fixed_rect.debug = true;
  moving_rect.debug = true;
  fr_1.debug = true;
  fr_2.debug = true;
  fr_3.debug = true;
  fr_4.debug = true;
 
}

function draw() {
  background(230);

  //moving_rect.x = mouseX;
  //moving_rect.y = mouseY;

  text("Distance between rects : ", 100, 50);
  text(fixed_rect.x - moving_rect.x, 100, 70);

  if(isTouching(fixed_rect, moving_rect)){
    fixed_rect.shapeColor = "blue";
    moving_rect.shapeColor = "blue";
  } else  if(isTouching(fr_1, moving_rect)){
    fr_1.shapeColor = "purple";
    moving_rect.shapeColor = "purple";
  } else  if(isTouching(fr_2, moving_rect)){
    fr_2.shapeColor = "red";
    moving_rect.shapeColor = "red";
  } else  if(isTouching(fr_3, moving_rect)){
    fr_3.shapeColor = "crimson";
    moving_rect.shapeColor = "crimson";
  } else  if(isTouching(fr_4, moving_rect)){
    fr_4.shapeColor = "teal";
    moving_rect.shapeColor = "teal";
  } 
  else {
    fixed_rect.shapeColor = "green";
    moving_rect.shapeColor = "green";
    fr_1.shapeColor = "green";
    fr_2.shapeColor = "green";
    fr_3.shapeColor = "green";
    fr_4.shapeColor = "green";
  }
  bounceOff(moving_rect,fixed_rect);
  bounceOff(mr1,fr_1);
  bounceOff(mr2,fr_2);
  bounceOff(mr3,fr_3);
  bounceOff(mr4,fr_4);
  drawSprites();
}



