var Task = function(params) {
  this.usesLeft = params.usesLeft;
  this.logMessage = params.logMessage;
  if (params.action) {
    this.action = params.action;
  };
};

Task.prototype = {
  action: function(){},
  log: function(){
    console.log(this.logMessage);
  }
};

module.exports = Task;
