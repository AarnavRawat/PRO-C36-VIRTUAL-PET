/*
pro c36-virtual pet

Developer: Aarnav Rawat



Goal of class 36: 

● Create a pet.
● create a database to store the value of the food eaten by the pet and the value of the amount of food storage.
● Use OOPs programming style.
● create a visual representation of the pet and the food.
*/

//declaring variables
var dog, sadDog, happyDog, database;
var foodS, foodStock;
var addFood;
var foodObj;

//creating feed and lastFed variable here

function preload() {
  sadDog = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
}

//define the initial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  //creating the canvas
  createCanvas(1000, 400);

  //initializing the databse
  database = firebase.database();

  //creating food 
  foodObj = new Food();

  //foodS = database.ref('foodAmount');
  //foodS.on("value", readStock);

  //creating the dog
  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  //creating feed the dog button here
  //foodStock = database.ref('Food');
  //foodStock.on("value", readStock);
  //addFood = createButton("Add Food");
  //addFood.position(800, 95);
  //addFood.mousePressed(addFoods);

}

function draw() {
  background(46, 139, 87);

  //displaying the food
  foodObj.display();
  fill("white");

  getFoodAmount();
  //function call to feed the dog
  if (keyDown(UP_ARROW)) {
    
  }
  fill("white");
  text("FOOD REMAINING :" + foodS, 500, 150);
  //write code to read fedtime value from the database 


  //write code to display text lastFed time here
  text("Last Fed : 12AM",500,95);

  drawSprites();
}


function feedDog(){
  dog.addImage(happyDog);
}
function addFoods(){
  getFoodAmount();
}
function getFoodAmount() {
  var foodAmountRef = database.ref("foodAmount");
  foodAmountRef.on("value", function (data) {
    foodS = data.val();
  });
}

function updateFoodAmount(foodAmountInput) {
  database.ref('/').update({
  foodAmount: foodAmountInput
   });
 } 