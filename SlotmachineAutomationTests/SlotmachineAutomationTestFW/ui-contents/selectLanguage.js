exports.selectLanguage = function(lang) {
    switch (lang) {
        case "en":
            return "../../ui-contents/english/contents.js";
        case "pl":
            return "../../ui-contents/polish/contents.js";
    }
};
