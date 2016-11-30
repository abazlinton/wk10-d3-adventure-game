var assert = require("assert");
var Food = require("../food");

describe("Food", function(){

  var bread;

  beforeEach(function(){
    bread = new Food("bread", 25);
  });

  it( "has a name", function(){
    assert.equal("bread", bread.name);
  });

  it( "has health", function(){
    assert.equal(25, bread.health);
  });

  it( "starts with poisonous status of false", function(){
    assert.equal(false, bread.poisonous);
  });

  it( "can change the poisonous status", function(){
    bread.makePoisonous();
    assert.equal(true, bread.poisonous);
  });


});
