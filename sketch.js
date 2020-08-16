//Create variables here
var dog,happydog;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  
}

function setup() {
	createCanvas(500, 500);
  dog = loadImage("images/dogImg.png");
  database = firebase.database();
  foodStock = datbase.ref('Food');
  foodStock.on("value",readStock);

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0;
  } else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}
function draw() {  
background(rgb(173,23,193))
   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
      happydog.addImage(dogImg2.png);
    }
    drawSprites();

    stroke(white);
    fill(purple);
    textSize(40);
    text("press on up arrow key to feed the dog milk")



  
  //add styles here

}



