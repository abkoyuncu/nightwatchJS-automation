var overview = require("./overview.objects.js");
const overviewPageObjects = overview.overviewComponents;

exports.getSrcOfHtml5shield = function(client, callback) {
  client.useXpath();
  client.getText(overviewPageObjects.html5shield, function(returnedSrc) {
    return callback(returnedSrc.value);
  });
};
