
var wall, thickness;
var bullet, speed, weight;
var lbullet, Lbullet;
var lwall, 

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, 100);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);


  bullet.velocityX = speed;

}

function draw() {
  background(0); 

  if (wall.x-bullet.x < (bullet.width+wall.width)/2)
   {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed/22500;
    if (deformation>180) 
    {
      bullet.shapecolor=color("white");
    }

    if (deformation<180 && deformation>100) 
    {
      bullet.shapecolor=color("white");
    }

    if (deformation<100) 
    {
      bullet.shapecolor=color("white");
    }
  }

  if(hasCollided(bullet, wall)) {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
    
    if(damage>10) {
      wall.shapecolor = color("red");
    }
  
    if(damage<10) {
      wall.shapecolor = color("green");
    }

  drawSprites();
}


function hasCollided(Lbullet, Lwall) {
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
    return false;
}


}