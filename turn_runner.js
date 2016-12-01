var chalk = require('chalk');

var TurnRunner = function(){
  this.tasks = [];
}

TurnRunner.prototype = {

  addTask: function(task) {
    this.tasks.push(task);
  },
  runTurn: function(){
    for (task of this.tasks){
      task.usesLeft -= 1;
      console.log("  ",chalk.blue.dim(task.logMessage));
      return task.action();
    };
  }

};
module.exports = TurnRunner;
