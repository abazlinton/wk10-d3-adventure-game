var Task = function(params) {
  this.usesLeft = params.usesLeft;
  this.logMessage = params.logMessage;

  if (params.action) {
    this.action = params.action;
  };

  // if (params.actionSubject) {
  //   this.action = params.actionSubject;
  // };
};

Task.prototype = {
  action: function(){},
};

module.exports = Task;
