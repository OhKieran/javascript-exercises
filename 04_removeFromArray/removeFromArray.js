const removeFromArray = function(input, ...args) {
    let newText = [];

    input.forEach(element => {
        if (!args.includes(element)) {
            newText.push(element);
        }
    });

    return newText;
}

// Do not edit below this line
module.exports = removeFromArray;
