var prizeList = require("./prizes-list.objects.js");
var prizeListObjects = prizeList.prizesListComponents;

exports.getBasePointOfARow = function(client, rowId, callback) {
  client.useXpath();
  let element = prizeListObjects.points(rowId);
  client.getAttribute(element, "data-basepayout", function(basePayout) {
    let basePayoutValue = basePayout.value;
    return callback(Math.round(basePayoutValue));
  });
};

exports.getDisplayedPayout = function(client, rowId, callback) {
  client.useXpath();
  let element = prizeListObjects.points(rowId);
  client.getText(element, function(currentPayout) {
    return callback(currentPayout.value);
  });
};
