//TC2_WinPrizePrices The objective of this test case is checking if win prize prices are updated correctly after bet count changed

var betContainerObjects = require("../../modules/bet-container/bet-container.objects.js");
var betContainerMethods = require("../../modules/bet-container/bet-container.methods.js");
var prizesListMethods = require("../../modules/prizes-list/prizes-list.methods.js");
var prizesListObjects = require("../../modules/prizes-list/prizes-list.objects.js");
var defaults = require("../../inputs/defaults.js");
var dataInput = require("../../inputs/data/TC1.js");
var utils = require("../../utils.js");
const betContainerPageObjects = betContainerObjects.betContainerComponents;
const prizesListPageObjects = prizesListObjects.prizesListComponents;
var currentBetCount;

describe("TC2 Win Prize Prices are updated correctly after Bet Count Changed", function() {
    it("Should load applications page", function(browser) {
        browser.url(defaults.url).useXpath().pause(defaults.waitTime);
    });

    it("Should Update Win Prize Prices Updated Accordingly when bet is incremented", function(browser) {
        betContainerMethods.incrementByOneBetCount(browser, function() {
            validateWinPrizeChartValues(browser);
            browser.saveScreenshot("../../screenshots/" + utils.getTodaysDateForFolderName() + "/" + "TC2_1stcase_" + utils.getCurrentTimeForFileName() + ".png");
        });
    });

    it("Should Update Win Prize Prices Updated Accordingly when bet is decreased", function(browser) {
        betContainerMethods.decreaseByOneBetCount(browser, function() {
            validateWinPrizeChartValues(browser);
            browser.saveScreenshot("../../screenshots/" + utils.getTodaysDateForFolderName() + "/" + "TC2_2ndcase_" + utils.getCurrentTimeForFileName() + ".png");
        });
    });
});

var validateWinPrizeChartValues = function(browser) {
    for (let i = 0; i < defaults.winPrizeRows; i++) {
        let rowId = i + 1;
        prizesListMethods.getBasePointOfARow(browser, rowId, function(basePayout) {
            betContainerMethods.getCurrentBetCount(browser, function(currentBetCount) {
                let expectedCurrentPayout = basePayout * currentBetCount;
                browser.expect.element(prizesListPageObjects.points(rowId)).text.to.equal(expectedCurrentPayout);
            });
        });
    }
};
