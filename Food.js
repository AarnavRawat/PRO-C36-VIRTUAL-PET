/*
● Food object is the food amount which will store how much food is fed to the pet and 
the amount of a stock saved or remaining.
*/
class Food {
  constructor() {
    this.foodStock = 0;
    this.lastFed;
    this.image = loadImage('Milk.png');
    this.image2 = loadImage('milkImage.png');
    this.addFood = createButton("Add Food");
    this.feedDog = createButton("Feed Dog");
  }

  /*
        -> databaseReference.on() creates a listener which keeps listening to the field
        gameState from the database. When the gameState is changed in
        the database, the function passed as an argument to it is executed.

        Note: Here the function is directly written inside the .on() listener.
    */
  /*
      function definition to get/read/retrieve existing value of gameState from database
  */
      


  /*
      -> databaseReference.update() will update the database reference.
      Here "/" refers to the main database inside which gameState is created.
  */
  /*
     function definition to change existing value of gameState to a 
     new one based on the value of paramter passed in the database
  */
    

  display() {
    var x = 80;
    var y = 100;

    imageMode(CENTER);
    image(this.image, 720, 220, 70, 70);

    this.addFood.position(850,95);
    this.addFood.mousePressed(addFoods());

    this.feedDog.position(775,95);
    this.feedDog.mousePressed(feedDog());

    if (this.foodStock != 0) {
      for (var i = 0; i < this.foodStock; i++) {
        if (i % 10 == 0) {
          x = 80;
          y = y + 50;
        }
        image(this.image, x, y, 50, 50);
        x = x + 30;
        if (keyDown(UP_ARROW)) {
          image(this.image2, x, y, 50, 50);
        }
      }
    }
  }
}
/*


class Food {
  constructor() {
    this.foodStock = 0;
    this.lastFed;
    this.image = loadImage('Milk.png');
  }

  updateFoodStock(foodStock) {
    this.foodStock = foodStock;
  }

  getFedTime(lastFed) {
    this.lastFed = lastFed;
  }

  deductFood() {
    if (this.foodStock > 0) {
      this.foodStock = this.foodStock - 1;
    }
  }

  getFoodStock() {
    return this.foodStock;
  }


//function to read food Stock
function readStock(data) {
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog() {
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time

}

//function to add food in stock
function addFoods() {
  foodS++;
  database.ref('/').update({
    Food: foodS
  })
}
foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);

  display() {
    var x = 80;
    var y = 100;

    imageMode(CENTER);
    image(this.image, 720, 220, 70, 70);

    if (this.foodStock != 0) {
      for (var i = 0; i < this.foodStock; i++) {
        if (i % 10 == 0) {
          x = 80;
          y = y + 50;
        }
        image(this.image, x, y, 50, 50);
        x = x + 30;
      }
    }
  }
}
*/