var Task = require("../task");

var stickyPlaster = new Task({
  usesLeft: 3,
  // actionSubject: game.player,
  action: function(){
    hero.increaseHealth(10);
  },
  logMessage: "Plaster healed player by 10%!"
});

module.exports = stickyPlaster;
