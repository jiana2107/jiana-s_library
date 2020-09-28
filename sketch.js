var moving;
var fixed;


function setup() {
  createCanvas(800,400);
  moving=createSprite(300, 200, 50, 30);
  fixed=createSprite(600, 200, 40, 80);
  fixed.shapeColor="blue";
  moving.shapeColor="blue";
  moving.debug=true;
  //moving.velocityX=2;
  fixed.debug=true;
}

function draw() {
  background(230);  

  moving.x=mouseX;
  moving.y=mouseY;

  if(fixed.x-moving.x<=fixed.width/2 + moving.width/2 &&
    moving.x-fixed.x<=fixed.width/2 + moving.width/2 &&
    fixed.y-moving.y<=fixed.height/2 + moving.height/2 &&
    moving.y-fixed.y<=fixed.height/2 + moving.height/2 ){
    fixed.shapeColor="black";
    moving.shapeColor="black";
  }else{
    fixed.shapeColor="blue";
    moving.shapeColor="blue"; }

   /* if (fixed.x-moving.x<=fixed.width/2 + moving.width/2 &&
      moving.x-fixed.x<=fixed.width/2 + moving.width/2 &&
      fixed.y-moving.y<=fixed.height/2 + moving.height/2 &&
      moving.y-fixed.y<=fixed.height/2 + moving.height/2 ) {
        moving.velocityX=-1*(moving.velocityX); }*/

  drawSprites();
}