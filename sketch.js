var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches


//release bullets and change the image of shooter to shooting position when space is pressed


//player goes back to original standing image once we stop pressing the space bar

drawSprites();

}
