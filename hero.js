var Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {

  talk: function(){
    return "arghhh, " + this.name + " is the name";
  },
  decreaseHealth: function(amount){
    this.health -= amount;
    if (this.health < 0){
      this.health = 0;
    };
  },
  increaseHealth: function(amount){
    this.health += amount;
    if (this.health > 100){
      this.health = 100;
    };
  },
  eat: function(food){
    foodNutrition = food.nutrition;
    if (food.poisonous){
      this.decreaseHealth(foodNutrition);
    } else if (food.name === this.favouriteFood) {
      superFoodNutrition = foodNutrition * 1.5;
      this.increaseHealth(superFoodNutrition);
    } else {
      this.increaseHealth(foodNutrition);
    }
  }

};

module.exports = Hero;
