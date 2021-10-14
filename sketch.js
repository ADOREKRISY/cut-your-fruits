var sword
var swordimg

var alien 
var alienimg
var alienGroup

var fruit
var fruitGroup
var fruit1,fruit2,fruit3,fruit4

var gameoverimg

var gamestate="play"

function preload()
{
swordimg=loadImage("knife.png")
alienimg=loadAnimation("alien1.png","alien2.png")
fruit1=loadImage("fruit1.png")
fruit2=loadImage("fruit2.png")
fruit3=loadImage("fruit3.png")
fruit4=loadImage("fruit4.png")
gameoverimg=loadImage("gameover.png")
}

function setup()
{
sword=createSprite(200,200,20,20)
sword.addImage("swordimg",swordimg)
sword.addImage("gameoverimg",gameoverimg)
alienGroup=new Group()
fruitGroup=new Group()
}

function draw()
{
background("lightblue")
if(gamestate=="play"){
  sword.x=mouseX
  sword.y=mouseY
  spawnAlien()
  spawnFruit()
if(fruitGroup.isTouching(sword))
{
fruitGroup.destroyEach()
}

else {
  if(alienGroup.isTouching(sword))
{
  gamestate="end"
alienGroup.destroyEach()
fruitGroup.destroyEach()
fruitGroup.setVelocityXEach(0)
alienGroup.setVelocityXEach(0)
sword.changeAnimation("gameoverimg")
sword.x=200
sword.y=200
sword.scale=2
}
}
}


drawSprites()
}

function spawnAlien() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     alien = createSprite(600,100,40,10);
    alien.y = Math.round(random(10,400));
    alien.addAnimation("alienimg",alienimg)
    alien.scale = 0.5;
    alien.velocityX = -3;
    
     //assign lifetime to the variable
    alien.lifetime = 300;
    
    //adding cloud to the group
   alienGroup.add(alien);
    }
}

function spawnFruit() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     fruit = createSprite(600,100,40,10);
    fruit.y = Math.round(random(10,400));
    var rand=Math.round(random(1,4))
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;

      default: break;
    }

    fruit.scale = 0.3;
    fruit.velocityX = -3;
    
     //assign lifetime to the variable
    fruit.lifetime = 400;
    
    //adding cloud to the group
   fruitGroup.add(fruit);
    }
}