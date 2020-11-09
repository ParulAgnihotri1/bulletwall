

var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(50,90);
  weight=random(400,1500);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor="red";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor="black";
}

function draw() {
  background(255,255,255);  

  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if (damage>10){
     wall.shapecolor=color("green");
   }
   if (damage<10){
    wall.shapecolor=color("red");
  }


  }

  drawSprites();
}

function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}