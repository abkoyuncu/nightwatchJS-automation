var timeAndDate = new Date();

exports.getTodaysDateForFolderName = function() {
    let dd = timeAndDate.getDate();
    let mm = timeAndDate.getMonth() + 1;
    let yyyy = timeAndDate.getFullYear();

    if (dd < 10) {
        dd = "0" + dd;
    }

    if (mm < 10) {
        mm = "0" + mm;
    }

    return mm + "-" + dd + "-" + yyyy;
};

exports.getCurrentTimeForFileName = function() {
    let hour = timeAndDate.getHours();
    let minute = timeAndDate.getMinutes();

    return hour + "-" + minute;
};
