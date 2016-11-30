var assert = require("assert");
var World = require("../world");


describe("World", function(){

  var world;

  beforeEach(function(){
    world = new World(20);
  });

  it("has a size", function(){
    assert.equal(20, world.size());
  });

  // it("has a size", function(){
  //
  // });

});
