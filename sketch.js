var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400,200,70,50);
  movingrect.shapeColor = "yellow";
  fixedrect = createSprite(200,200,70,70);
  fixedrect.shapeColor = "yellow";
  
}

function draw() {
  background("black");  
movingrect.x = mouseX;
movingrect.y= mouseY;
if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2){
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}
else{
  movingrect.shapeColor = "yellow";
  fixedrect.shapeColor = "yellow";
}
  drawSprites();
}