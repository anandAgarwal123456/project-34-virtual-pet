var database;
var dog,happyDog,dog1,dog2;
var foodS,foodStock;

function preload()
{
  dog1=loadImage("dog.png");
  dog2=loadImage("happydog.png");
}


function setup() {
  createCanvas(500,500);
  database = firebase.database();
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);

  dog= createSprite(250,280,20,30);
  dog.addImage("dog.png");

}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dog2);
  }

  drawSprites();

  //add styles here
  textSize(12);
  text("Food Remaining:"+ foodS,170,200);

  textSize(10);
  fill("white");
  stroke(5);
  text("NOTE: Press UP_ARROW key to feed HEDWIG MILK!!!",190,20);

}

function writeStock(data) {

  foodS - data.val();
}


function readStock(x) {

  if(x<=0) {
    x=0;
  }else {
    x=x-1;
  }

  database.ref('/').update({
    food: x
  })
}
