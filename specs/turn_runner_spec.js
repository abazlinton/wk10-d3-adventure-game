var assert = require("assert");
var TurnRunner = require("../turn_runner");

beforeEach(function(){
  turnRunner = new TurnRunner();
});

describe("Turn Runner", function(){
  it("holds an set of turn tasks that starts empty", function(){
    assert.equal(0, turnRunner.tasks.length);
  });

  it("can take in a new task and add to the tasks", function(){
    var taskStub = {usesLeft: Infinity}
    turnRunner.addTask(taskStub);
    assert.equal(Infinity, turnRunner.tasks[0].usesLeft);
  });

  it("can run through the tasks and perform actions", function(){
    var taskStub1 = {action: function () { return "action run"}, usesLeft: 10 };
    turnRunner.addTask(taskStub1);
    result = turnRunner.runTurn();
    assert.equal("action run", result);
  });

  it("depletes task's usesLeft when task is run", function(){
    var taskStub1 = {action: function () { return "action run"}, usesLeft: 10 };
    turnRunner.addTask(taskStub1);
    turnRunner.runTurn();
    assert.equal(9, turnRunner.tasks[0].usesLeft);
  });

  it("keeps Infinite tasks as infinite after task is run", function(){
    var taskStub1 = {action: function () { return "action run"}, usesLeft: Infinity};
    turnRunner.addTask(taskStub1);
    turnRunner.runTurn();
    assert.equal(Infinity, turnRunner.tasks[0].usesLeft);
  });

});
