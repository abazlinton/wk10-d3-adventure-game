var Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  talk: function(){
    return "arghhh, " + this.name + " is the name";
  }
};

module.exports = Hero;
