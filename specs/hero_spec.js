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

  it( "health can be decreased", function(){
    hero.decreaseHealth(10);
    assert.equal(90, hero.health);
  });

  it( "health cannot go below zero", function(){
    hero.decreaseHealth(110);
    assert.equal(0, hero.health);
  });

  it( "health can be increased", function(){
    hero.decreaseHealth(20);
    hero.increaseHealth(10);
    assert.equal(90, hero.health);
  })

  it( "health cannot go above 100", function(){
    hero.decreaseHealth(10);
    hero.increaseHealth(20);
    assert.equal(100, hero.health);
  })

})
