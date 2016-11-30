var assert = require("assert");
var Food = require("../food");

describe("Food", function(){

  var bread;

  beforeEach(function(){
    bread = new Food("bread", 25);
    console.log(bread);
  });

  it("has a name", function(){
    assert.equal("bread", bread.name);

  });

  it("has health", function(){
    assert.equal(25, bread.health);

  })

  it("starts with poisonous status of false", function(){
    assert.equal(false, bread.poisonous);
  })


});
