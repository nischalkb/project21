var wall,thickness;
var  bullets,speed,weight;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321)
  weight = random (30,52)
  thickness=random(22,83)
  
  bullets= createSprite(50, 200, 50, 20);
  bullets.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);
}

function draw() {
    
  background(0);

  
  if(wall.x-bullets.x<(bullets.width+wall.width)/2)
  {
    bullets.velocityX = 0;
    var damage=0.5 * weight * speed* speed/thickness*thickness*thickness;
  }
  
  if(damage<10)
  {
    wall.shapeColor = color("green");
  }
  
  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }

  

  



  
  drawSprites();
}

function hasColided(lbullet,lwall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}
