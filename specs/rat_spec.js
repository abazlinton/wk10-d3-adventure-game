var assert = require("assert");
var Rat = require("../rat");
var Food = require("../food");

describe("Rat", function(){

  var rat;
  var meat;

  beforeEach(function(){
    rat = new Rat();
    meat = new Food("meat", 50);
  });

  it("can poison food", function(){
    rat.touch(meat);
    assert.equal(true, meat.poisonous);
  })

});
