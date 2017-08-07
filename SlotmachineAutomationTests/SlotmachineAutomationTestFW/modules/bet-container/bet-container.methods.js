var betContainer = require("./bet-container.objects.js");
var betContainerPageObjects = betContainer.betContainerComponents;

exports.setBetCount = function(client, requiredBetCount, currentBetCount) {
  const spinUpBtn = betContainerPageObjects.betSpinUpButton;
  const spinDownBtn = betContainerPageObjects.betSpinDownButton;

  let difference = requiredBetCount - currentBetCount;
  if (difference < 0) {
    buttonToClick = spinDownBtn;
    difference = 0 - difference;
    this.changeBetCount(client, buttonToClick, difference);
  } else if (difference > 0) {
    buttonToClick = spinUpBtn;
    this.changeBetCount(client, buttonToClick, difference);
  }
};

exports.changeBetCount = function(client, buttonToClick, clickTime) {
  for (let i = 0; i < clickTime; i++) {
    client.useXpath();
    client.click(buttonToClick);
    client.pause(1000);
  }
};
exports.getCurrentBetCount = function(client, callback) {
  client.useXpath();
  client.getText(betContainerPageObjects.betLabel, function(currentBetCount) {
    return callback(currentBetCount.value);
  });
};

exports.incrementByOneBetCount = function(client, callback) {
  client.useXpath();
  client.click(betContainerPageObjects.betSpinUpButton);
  return callback();
};

exports.decreaseByOneBetCount = function(client, callback) {
  client.useXpath();
  client.click(betContainerPageObjects.betSpinDownButton);
  return callback();
};
