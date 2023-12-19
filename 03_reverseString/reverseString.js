const reverseString = function(input) {
    let chars = input.split("");
    let newText = '';

    for (let i = chars.length - 1; i >= 0; i--)
    {
        newText += chars[i];
    }
    return newText;

};

// Do not edit below this line
module.exports = reverseString;
