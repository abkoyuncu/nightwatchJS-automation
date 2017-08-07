module.exports = {
    prizesListComponents: {
        points: function(rowId) {
            let element = '//div[@id="prizes_list_slotMachine1"]/div['+rowId+']/span'
                return element;
        }
    }
};