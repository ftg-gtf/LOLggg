var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(400,1500);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = speed;
  wall.debug = true;

}

function draw() {
  background(0,0,0);

  bullet.collide(wall);  
   if(hasCollided(bullet,wall)){
       bullet.velocityX = 0;
       var damamge = 0.5 * weight * speed/(thickness * thickness * thickness);

       if(damamge > 10){
           wall.shapeColor = color(255,0,0);
       }

       if(damamge < 10){
        wall.shapeColor = color(0,255,0);
    }
   }
 
  drawSprites();
} 

function hasCollided(bullet,wall){
    bulletRightEdge - bullet.x + bullet.width;
    wallLeftEdge = wall.x;  
    if(bulletRightEdge >= wallLeftEdge){
        return true;
    }
    return false;
}