var player,playerimg;
var bg,bgSleep,bgSleepWithTheLightsOff,bgNewWorld;
var drawers,bookstand,setupp,shelf,bed;
var turnTheLightsOff,levelButton;
var GAMESTATE = "lightsOn";
var playErimg,playEr1;
function preload(){
    bg = loadImage("pixil-frame-0.png");
    playerimg = loadImage("stand-1.png");
    bgSleep = loadImage ("jami.png");
    bgSleepWithTheLightsOff = loadImage("MicrosoftTeams-image (6).png");
    bgNewWorld = loadImage("MicrosoftTeams-image (7).png");
    playErimg = loadImage("stand.png")

}
function setup(){
    createCanvas(1200,600)
   theworldsetup(); 
   noworldsetup();
}
function draw(){
    background(bg);
     
    if(GAMESTATE === "lightsOn"){
    theworld();
    if(keyDown("A")){
        player.x = player.x - 5
    }
    if(keyDown("D")){
        player.x = player.x+5;
    }
    
}

if(GAMESTATE === "lightsOff"){
   nightworld();
}

if(GAMESTATE==="newWorld"){
    player.destroy();
    playEr1.visible=true;
   // noworldsetup();
   background(bgNewWorld)
    //nooWorld();
    if(keyDown("Q")){
        playEr1.x=playEr1.x+5
    }
    if(keyDown("E")){
        playEr1.x = playEr1.x-5;
    }

}
drawSprites(); 

}
 function  theworldsetup(){
    player = createSprite(800,900,50,50);
    player.addImage(playerimg);
    player.scale=2.0
    drawers = createSprite(1070,600,20,20);
    drawers.shapeColor="red"
    bookstand = createSprite(900,600,20,20);
    bookstand.shapeColor="pink";
    setupp = createSprite(720,600,20,20);
    setupp.shapeColor="blue";
    shelf=createSprite(500,600,20,20);
    shelf.shapeColor="green";
    bed = createSprite(150,600,20,20);
    bed.shapeColor= "orange"
    turnTheLightsOff = createSprite(20,300,20,20);
    turnTheLightsOff.shapeColor = "red";
    levelButton = createSprite(20,400,40,20);
    levelButton.shapeColor = "pink";
    bookstand.debug = false;
    drawers.debug = false;
    player.debug = false;
    player.setCollider("rectangle",-50,-50,80,500);
    drawers.setCollider("rectangle",0,0,10,10);
    drawers.visible = false;
    bookstand.visible = false;
    setupp.visible = false;
    shelf.visible = false;
    bed.visible = false;
    turnTheLightsOff.visible = false;
    levelButton.visible = false;
 }
 function theworld(){
    
    if(player.isTouching(drawers)){
        textSize(40);
        fill("black")
        text("today was tiring", 400,400);
        
    } if(player.isTouching(bookstand)){
        textSize(40);
        fill("black")
        text("nothing special but", 400,400)
    } if(player.isTouching(setupp)){
        textSize(40);
        fill("orange")
        text("it was oddly tiring than usual,i wonder why...", 400,302)
    } if(player.isTouching(shelf)){
        textSize(40);
        fill("orange")
        text("nah im just overthinking it too much... ", 400,302)
    } if(player.isTouching(bed)){
        background(bgSleep);
        textSize(40);
        fill("orange")
        text("goodnight to me :)", 400,302);
        player.visible = false;
        turnTheLightsOff.visible = true;
    }
    if (mousePressedOver(turnTheLightsOff)){
     GAMESTATE = "lightsOff"
    }
 }
 function nightworld(){
    background(bgSleepWithTheLightsOff);
    levelButton.visible = true;
    if (mousePressedOver(levelButton)){
        GAMESTATE = "newWorld";
    }
 }
 function noworldsetup()
 {
    
    turnTheLightsOff.visible = false;
    levelButton.visible = false;
    playEr1 = createSprite(200,850,20,20)
    playEr1.addImage(playErimg);
    //playEr.shapeColor = "red";
    playEr1.scale = 2.0
   playEr1.visible= false;
 }
function nooWorld(){

   // background(bgNewWorld)
   playEr1.visible=true;
    
}

