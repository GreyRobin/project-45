var guy, guyimg
var cloud, cloudimg
var ground, groundimg
var bg, bgimg
var spike, spikeimg
var monster, monsterimg

function preload(){
  guyimg = loadImage("guy.png")
  cloudimg = loadImage("cloud.png")
  groundimg = loadImage("groundimg.png")
  bgimg = loadImage("bg.png")
  spikeimg = loadImage("spike_top.png")
  monsterimg = loadImage("monster.png")
}

function setup() {
  createCanvas(1365, 650)
  guy = createSprite(50,530,50,50)
  guy.addImage(guyimg)
  guy.scale = 0.5
  ground = createSprite(50,600,420,50)
  ground.addImage(groundimg)
  wall1 = createSprite(200,600,200,20)
  wall1.shapeColor="red"
  wall2 = createSprite(300,550,20,150)
  wall2.shapeColor="blue"
  wall3 = createSprite(400,500,200,20)
  wall3.shapeColor="green"
  wall4 = createSprite(500,400,20,200)
  wall4.shapeColor=rgb(142,50,19)
  wall5 = createSprite(600,570,20,150)
  wall5.shapeColor="cyan"
  wall6 = createSprite(600,500,200,20)
  wall6.shapeColor="yellow"
  wall7 = createSprite(600,300,200,20)
  wall7.shapeColor="orange"
  wall8= createSprite(800,420,200,20)
  wall8.shapeColor="brown"
  wall9 = createSprite(900,550,20,150)
  wall9.shapeColor="black"
  wall10 = createSprite(1000,400,200,20)
  wall10.shapeColor="maroon"

  wall11= createSprite(1100,320,20,200)
  wall11.shapeColor="purple"

  wall12= createSprite(1200,570,20,150)
  wall12.shapeColor= rgb(12,15,80)

  
}

function draw() {
  background(bgimg);
  if(keyDown(RIGHT_ARROW)){
    guy.x = guy.x+5
  }
  if(keyDown(UP_ARROW)){
    guy.y = guy.y-10
  }
  if(keyDown(LEFT_ARROW)){
    guy.x = guy.x-5
  }
  spawnClouds()
  drawSprites()
}

function spawnClouds(){
  if(frameCount%120===0){
    cloud = createSprite(1365,100,50,50)
    cloud.addImage(cloudimg)
    cloud.scale = 0.3
    cloud.velocityX = -5
    cloud.y = Math.round(random(35,80))
    cloud.lifetime = 250
  }
}