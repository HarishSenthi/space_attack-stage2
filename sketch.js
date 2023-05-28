var space,spaceImg;
var spaceship,spaceshipImg;
var asteroid,asteroidImg,asteroidGroup;
var enemy,enemyImg,enemyGroup;


function preload(){
spaceImg=loadImage("space.jpg")
spaceshipImg=loadImage("spaceship.png")
asteroidImg=loadImage("asteroid.png")
enemyImg=loadImage("enemy.png")
}

function setup() {
  createCanvas(900,650);
spaceship=createSprite(300,600)
spaceship.addImage(spaceshipImg)
spaceship.scale=0.6
spaceship.debug = false
spaceship.setCollider("rectangle",0,0,300,200)

asteroidGroup=new Group()
enemyGroup=new Group()
}

function draw() {
  background(0);
  image(spaceImg,0,0,900,650);

  spaceship.x=World.mouseX
  if(spaceship.x<60){
    spaceship.x=60
  }

  if(spaceship.x > 895){
    spaceship.x=650
  }



if(asteroidGroup.isTouching(spaceship)){
 

  for(var i=0;i<asteroidGroup.length;i++){     
       
   if(asteroidGroup[i].isTouching(spaceship)){
        asteroidGroup[i].destroy()
        } 
  }
 }

 if(enemyGroup.isTouching(spaceship)){
 

  for(var i=0;i<enemyGroup.length;i++){     
       
   if(enemyGroup[i].isTouching(spaceship)){
        enemyGroup[i].destroy()
        } 
  }
 }


 SpawnEnemy()
SpawnAsteroid()

  drawSprites();

}
function SpawnAsteroid(){
  if(frameCount%60===0){

    
    asteroid = createSprite(random(100,800),random(50,200),40,40)
    asteroid.addImage(asteroidImg)
    asteroid.scale=0.21
    asteroid.velocityY = +3
    asteroid.debug= false
    asteroid.setCollider("rectangle",0,0,400,400)
   
    asteroid.lifetime = 400
   asteroidGroup.add(asteroid)
  }
}

function SpawnEnemy(){
  if(frameCount%60===0){

    enemy = createSprite(random(100,800),random(50,200),40,40)
    enemy.addImage(enemyImg)
    enemy.scale=0.5
    enemy.velocityY = +3
    enemy.debug= false
    enemy.setCollider("rectangle",0,0,400,400)
   
    enemy.lifetime = 400
    enemyGroup.add(enemy)
  }
}











