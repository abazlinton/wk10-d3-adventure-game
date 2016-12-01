var assert = require("assert");
var TurnRunner = require("../turn_runner");
var Task = require("../task");
var Hero = require("../hero");
var pry = require('pryjs');
var Game = require('../game');

hero = null;

describe("Integration Tests", function(){

  this.timeout(0); // pry causes timeout failure to trigger. This fixes it.
  // var hero;
  var turnRunner;


  beforeEach(function(){

    hero = new Hero("Alex", "curry");
    turnRunner = new TurnRunner();
    game = new Game({player: hero});
  });

  it("Can 'move player' using task and turnRunner", function(){
    var standardMoveTask = new Task({
      usesLeft: Infinity,
      logMessage: "moved",
      action: function(){
        hero.moveForward(1);
      }
    });
    turnRunner.addTask(standardMoveTask);
    // eval(pry.it);
    turnRunner.runTurn();
    assert.equal(1, hero.position);
  });

  it("Can use stickyPlaster task", function(){
    var stickyPlasterTask = require("../tasks/sticky_plaster");
    turnRunner.addTask(stickyPlasterTask);
    // eval(pry.it);
    hero.decreaseHealth(80);
    // eval(pry.it);
    turnRunner.runTurn();
    turnRunner.runTurn();
    turnRunner.runTurn();
    assert.equal(50, hero.health);
    assert.equal(0, stickyPlasterTask.usesLeft);
  })

});
