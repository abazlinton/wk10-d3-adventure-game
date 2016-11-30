var Food = function(name, health) {
  this.name = name;
  this.health = health;
  this.poisonous = false;
}

Food.prototype = {
  makePoisonous: function(){
    this.poisonous = true;
  }
}

module.exports = Food;
