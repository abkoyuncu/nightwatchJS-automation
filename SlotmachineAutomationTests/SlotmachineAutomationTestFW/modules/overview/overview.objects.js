module.exports = {
    overviewComponents: {
        html5shield: '//div[@class="overview"]/img',
        header: '//div[@class="overview"]/h2',
        titleSummary: '//div[@class="overview"]/div[@class="box"]/p[@class="title"]',
        contentSummary: function(nrOfParagraph) {
             let element = '//div[@class="overview"]/div[@class="box"]/p['+(nrOfParagraph+1)+']';
                            return element;
            }
    }
};