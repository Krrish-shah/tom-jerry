var jerry
function preload() {
    garden=loadImage("images/garden.png")
    
    tom1=loadAnimation("images/cat1.png")
    tom2=loadAnimation("images/cat2.png","images/cats3.png")
    tom3=loadAnimation("images/cat4.png")
   jerry1=loadAnimation("images/mouse1.png")
   jerry2=loadAnimation("images/mouse2.png","images/mouse3.png")
   jerry3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
     jerry=createSprite(500,400,20,20)
     jerry.addAnimation("jerrystanding",jerry1)
     tom=createSprite(350,200,20,20)
     tom.addAnimation("tomsleeping",tom1)

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("tomlast",tom3)
        tom.x=300
        tom.changeAnimation("tomlast")
        jerry.addAnimation("jerrylast",jerry3)
        jerry.changeAnimation("jerrylast")
        
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode===LEFT_ARROW){
     tom.velocityX=-5
     tom.addAnimation("tomrunning",tom2)
     tom.changeAnimation("tomrunning")
     jerry.addAnimation("jerryteasing",jerry2)
     jerry.frameDelay=25
     jerry.changeAnimation("jerryteasing")
    }


}
