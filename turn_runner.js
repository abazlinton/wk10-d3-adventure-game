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
      return task.action();
    };
  }

};
module.exports = TurnRunner;
