
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
}



function setup() {
  createCanvas (500,500)
  ground= createSprite(250,450,1000,20)
  monkey = createSprite(50,435,5,5)
  monkey.addAnimation("Monkey",monkey_running)
  monkey.scale=0.15
  
  FoodGroup= createGroup()
  obstacleGroup=createGroup()
  
}


function draw() {
  console.log(frameCount)
  background("white")
  ground.velocityX=-12
  if (ground.x<0)
    {
      ground.x=ground.x=width/2
    }

  monkey.collide(ground)
  monkey.velocityY=monkey.velocityY+0.8
  if (keyWentDown("space")&&monkey.y>393)
      {
       monkey.velocityY=-20
      }
  
  score = score + Math.round(getFrameRate()/60);
    
  textFont("Algerian")
  textSize(20)
  text("Survival Time = "+score,150,100)
  
  drawSprites()
  
  Banana()
  Obstacle()
}


function Banana()
{
 if(frameCount%80===0)
 {
  banana=createSprite(500,random(120,200))
  banana.addImage("bananaphoto",bananaImage)
  banana.scale=0.13
  banana.velocityX=-3
  banana.lifetime=167
  FoodGroup.add(banana)
 }
}

function Obstacle()
{
  if (frameCount%100===0)
  {
  obstacle = createSprite(500,415,20,20)
  obstacle.addImage("stonephoto",obstacleImage)
  obstacle.scale=0.15
  obstacle.velocityX=-4
  obstacle.lifetime=167
  obstacle.setCollider("circle",0,0,160)
  obstacle.collide(ground )
  obstacleGroup.add(obstacle)

  }
}
