var fitimg ,fit,form
function preload(){
fitimg=loadImage("fitness.jpg")
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  fit=createSprite(400,400,50,50)
  fit.addImage(fitimg)
  form=new Form()
  }


function draw() {
  background("yellow"); 
form.display()
   
    drawSprites();


  } 
 