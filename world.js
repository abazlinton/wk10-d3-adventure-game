var World = function(size){
  this.location = new Array(size);
};

World.prototype = {
  size: function(){
    return this.location.length;
  }

};

module.exports = World;
