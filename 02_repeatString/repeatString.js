const repeatString = function(text, times) {
    let repeatedText = '';

    if (times < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < times; i++) {
            repeatedText += text;
        };
        return repeatedText;
    }
};

// Do not edit below this line
module.exports = repeatString;
