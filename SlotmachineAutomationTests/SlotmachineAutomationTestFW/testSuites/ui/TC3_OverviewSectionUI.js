var headerMethods = require("../../modules/header/header.methods.js");
var overviewObjects = require("../../modules/overview/overview.objects.js");
var overviewMethods = require("../../modules/overview/overview.methods.js");
var defaults = require("../../inputs/defaults.js");
var expect = require("chai").expect;
var language = require("../../ui-contents/selectLanguage.js");
pathForContents = language.selectLanguage("en");
var contents = require(pathForContents);
var utils = require("../../utils.js");
const overviewContent = contents.overviewSection;
const overviewPageObjects = overviewObjects.overviewComponents;
const totalNrOfParagraphs = defaults.nrOfParagraphs.overview;

describe("TC3 Clicking Overview Link and Checking Content of Overview Section", function() {
    it("Should load applications page", function(browser) {
        browser.url(defaults.url).useXpath().pause(defaults.waitTime);
    });

    it("Should click overview link", function(browser) {
        headerMethods.clickOverviewLink(browser);
        browser.saveScreenshot("../../screenshots/" + utils.getTodaysDateForFolderName() + "/" + "TC3_Step1_" + utils.getCurrentTimeForFileName() + ".png");
    });

    it("Should display expected header " + overviewContent.header + " in overview section", function(browser) {
        browser.expect.element(overviewPageObjects.header).text.to.equal(overviewContent.header);
        browser.saveScreenshot("ali.jpeg");

        browser.saveScreenshot("../../screenshots/" + utils.getTodaysDateForFolderName() + "/" + "TC3_Step2_" + utils.getCurrentTimeForFileName() + ".png");
    });

    it("Should display expected title " + overviewContent.titleSummary + " in overview section", function(browser) {
        browser.expect.element(overviewPageObjects.titleSummary).text.to.equal(overviewContent.titleSummary);
        browser.saveScreenshot("../../screenshots/" + utils.getTodaysDateForFolderName() + "/" + "TC3_Step3_" + utils.getCurrentTimeForFileName() + ".png");
    });

    for (let i = 0; i < totalNrOfParagraphs; i++) {
        it("Should display expected content in " + (i + 1) + ".pharagraph in overview section", function(browser) {
            let nrOfParagraph = i + 1;
            let expectedContent = overviewContent.contentSummary(nrOfParagraph);
          browser.expect.element(overviewPageObjects.contentSummary(nrOfParagraph)).text.to.equal(expectedContent);
        });
    }
});
