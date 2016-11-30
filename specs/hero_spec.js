var assert = require("assert");
var Hero = require("../hero");

describe("Hero", function(){

var hero;

  beforeEach(function(){
    hero = new Hero("Jack Sparrow", "fish");
  });

  it( "has name", function(){
    assert.equal("Jack Sparrow", hero.name);
  });

  it( "health starts at 100", function(){
    assert.equal(100, hero.health);
  });

  it( "has favourite food", function(){
    assert.equal("fish", hero.favouriteFood);
  });

  it( "can talk", function(){
    assert.equal("arghhh, Jack Sparrow is the name", hero.talk())
  });
})
