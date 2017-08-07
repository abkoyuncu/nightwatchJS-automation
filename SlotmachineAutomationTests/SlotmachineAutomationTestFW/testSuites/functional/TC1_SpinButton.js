//TestCase_1_SpinButton.js The objective of this test case is checking if spin button is working as expected

var betContainerObjects = require("../../modules/bet-container/bet-container.objects.js");
var betContainerMethods = require("../../modules/bet-container/bet-container.methods.js");
var prizesListMethods = require("../../modules/prizes-list/prizes-list.methods.js");
var defaults = require("../../inputs/defaults.js");
var dataInput = require("../../inputs/data/TC1.js");
var utils = require("../../utils.js");
const betContainerPageObjects = betContainerObjects.betContainerComponents;
var currentBetCount;

describe("TC1 Spin Up and Down arrows Functionality work as expected", function() {
    it("Should load applications page", function(browser) {
        browser.url(defaults.url).useXpath().pause(defaults.waitTime);
    });

    dataInput.requiredBetCount.forEach(function(scenarioInput) {
        it("Should make bet label Count: " + scenarioInput, function(browser) {
            betContainerMethods.getCurrentBetCount(browser, function(currentBetCount) {
                betContainerMethods.setBetCount(browser, scenarioInput, currentBetCount);
                browser.pause(defaults.waitTime).useXpath().expect.element(betContainerPageObjects.betLabel).text.to.equal(scenarioInput);
                browser.saveScreenshot("../../screenshots/" + utils.getTodaysDateForFolderName() + "/" + "TC1_" + utils.getCurrentTimeForFileName() + ".png");
            });
        });
    });
});
