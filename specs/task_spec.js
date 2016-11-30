var assert = require("assert");
var Task = require("../task");

describe("Task", function(){
  it("test", function(){
    var task1 = new Task({uses: 0, logMessage:"testing1"});
    var task2 = new Task({uses: 0, logMessage:"testing2"});
  });
});
