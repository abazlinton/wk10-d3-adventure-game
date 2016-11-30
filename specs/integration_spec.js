var assert = require("assert");
var TurnRunner = require("../turn_runner");
var Task = require("../task");
var Hero = require("../hero");
var pry = require('pryjs')

describe("Integration Tests", function(){
  it("Can'move player' using task and turnRunner", function(){

    var hero = new Hero("Alex", "curry");
    var standardMoveTask = new Task({
      usesLeft: Infinity,
      action: function(){
        hero.moveForward(1);
      }
    });
    var turnRunner = new TurnRunner();
    turnRunner.addTask(standardMoveTask);
    // eval(pry.it);
    turnRunner.runTurn();
    assert.equal(1, hero.position);
  });
});
