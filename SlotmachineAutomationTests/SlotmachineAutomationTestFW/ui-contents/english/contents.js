module.exports = {
    headerSection: {
        overviewLink: "Overview"
    },
    overviewSection: {
        imageSrc: "img/html5_shield.png",
        header: "Overview",
        titleSummary: "Summary",
        contentSummary: function(nrOfParagraph) {
            switch (nrOfParagraph) {
                case 1:
                    return "Visitors increasingly want to engage with our sites and brands. This slot machine gives the perfect way for your visitors to do that with little effort or cost to you or your company.On top of that it increases customer loyalty, returning to the site to continue to play! We've seen a huge variety of companies use this to great success. Imagination really is the only limit!";
                    break;
                case 2:
                    return "Have your own HTML5, pure Javascript slot machine on your site! In a recent survey, 74% of users said the well finished game contributed “moderately or significantly” to the fun of the site.";
                    break;
                case 3:
                    return "Packages provide a license for you to use this slot machine on all your sites. You can mix it up and customize your slot machine with the 5 different pre-set designs provided, or you can very easily make your own.";
                    break;
                case 4:
                    return "Written in pure HTML 5, Javascript, jQuery and CSS it is extremely quick and simple to integrate into any new or existing site. Proven to work flawlessly on mobiles and tablet (including Android, iOS and Windows Phone), your visitors can enjoy this feature at any time and there is no use of Flash or Java, so no annoying pop ups to distract your visitors from what you want them to focus on! ";
                    break;
            }
        }
    }
};
