var tower,towerImage;
var door,doorImage,doorsGroup;
var climber,climberImage,climbersGroup;
var ghost,ghostImahge;
var spookySound;

function preload(){
towerImage=loadImage("tower.png"); 
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
ghostImage=loadImage("ghost-standing.png");
spookySound=loadSound("spooky.wav")  
}
function setup(){
createCanvas(600,600);
spookySound.loop();  
tower=createSprite(300,300);
tower.addImage("tower",towerImage);
tower.velocityY=+1;
doorsGroup=new Group();
climbersGroup =new Group();   
ghost=createSprite(200,200,50);  
ghost.scale=0.3;
ghost.addImage("ghost",ghostImage);  
}
function draw(){
background(0);
if (tower.y>400){
tower.y=300;  
}
if (keyDown("left_arrow")){
ghost.x=ghost.x-3;  
} 
if (keyDown("right_arrow")){
ghost.x=ghost.x+3;  
}   
if (keyDown("up_arrow")){
ghost.x=ghost.y+3;  
} 
if (keyDown("down_arrow")){
ghost.x=ghost.y-3;  
} 
if(keyDown("space")){
ghost.velocityY=-5;
}
ghost.velocityY=ghost.velocityY+0.8;
if (climbersGroup.isTouching(ghost)){
ghost.velocityY=0;  
  
}
spawnDoors();

drawSprites();  
}
function spawnDoors() {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200,-50);
    door.x = Math.round(random(120,400));
    door.addImage(doorImage);
    door.velocityY = 1;
    
    var climber = createSprite(200,10);
    climber.x = door.x
    climber.addImage(climberImage);
    climber.velocityY = 1;
  
     //assign lifetime to the variable
    door.lifetime = 800;
    climber.lifetime =800;
    //adjust the depth
    ghost.depth = door.depth;
    ghost.depth = ghost.depth+1;
    
    //add each cloud to the group
    doorsGroup.add(door);
    climbersGroup.add(climber);
  }
  
}
