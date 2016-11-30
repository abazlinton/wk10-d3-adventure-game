var Food = function(name, nutrition) {
  this.name = name;
  this.nutrition = nutrition;
  this.poisonous = false;
}

Food.prototype = {
  makePoisonous: function(){
    this.poisonous = true;
  }
}

module.exports = Food;
