var header = require("./header.objects.js");

var headerObjects = header.headerComponents;

exports.clickOverviewLink = function(client, callback) {
  client.click(headerObjects.overviewLink);
};

exports.clickTestimonialsLink = function(client, callback) {
  client.click(headerObjects.testimonialsLink);
};

exports.clickBuyNowLink = function(client, callback) {
  client.click(headerObjects.buyNowLink);
};
