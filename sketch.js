var PLAY = 1, END = 0, gameState = PLAY; 
var playerImage,player,alien,court1,court,i=240,ground
function preload(){//this function is used to load the animations, images, and sound.
  playerImage=loadImage("basketball-walking.png")
  alien1=loadImage("png.png")
  court1 = loadImage("1court.jpg")
  end_screen = loadImage("hi.jpg")
}
function setup(){//this function is mainly used to create canvas, sprite, edges we also add the images to the sprite inside this
  //function. Also the properties of a sprite such as velocityX, Y, etc. are also set inside this function.
  createCanvas(windowWidth,windowHeight)
  
  /*court = createSprite(windowWidth,windowHeight,20,20)
  court.addImage(court1)*/
  
  player=createSprite(width/1,height-200,20,20)
  player.addImage(playerImage)
  player.scale = 0.54
  player.velocityX = -1.5
 

  ground=createSprite(width/1,height-10,windowWidth+15000,20)
  ground.visible = false

  createEdgeSprites()

alienGroup = new Group();


end_image = createSprite(windowWidth,windowHeight)
end_image.addImage(end_screen)
}

function draw(){
background(court1)




if(gameState==PLAY){
  if((keyDown("space")) && (player.y >= 100)){
    player.velocityY = -10;
  }
  end_image.visible = false
  player.velocityY = player.velocityY + 0.8;
  spawnaliens()
  if(alienGroup.isTouching(player)){
    gamestate = END
  }
}

else if(gameState==END){
  end_image.visible = true
  player.velocityY = 0;
  player.changeAnimation("playercolided", end_image);
}
player.collide(ground);


drawSprites()
}



function spawnaliens(){
  if(frameCount%120==0){
    alien=createSprite(windowWidth-i,height-130,20,20)
    alienGroup.add(alien)
    i=i+300
  //alien.addImage(alien1)
  alien.scale = 0.15
    
    var rand = Math.round(random(1,6));
    switch(rand){//here by default all the cases are turned off now whatever value rand holds that particular case will be switched on
      //by the switch function and this would make sure that random images are added to the alien.
      case 1: alien.addImage(alien1);
      break; 
      case 2: alien.addImage(alien1);
      break;
      case 3: alien.addImage(alien1);
      break;
      case 4: alien.addImage(alien1);
      break;
      case 5: alien.addImage(alien1);
      break;
      case 6: alien.addImage(alien1);
      break;
      default: break;
    }
    alien.lifetime = 300;
    //alienGroup.add(alien);
  }
}


