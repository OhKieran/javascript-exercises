const sumAll = function(start, end) {
    let x = start;
    let y = end;
    if (start > end) {
        x = end;
        y = start;
    }

    if (x < 0 || y < 0 || typeof(x) !== 'number' || typeof(y) !== 'number') {
        return 'ERROR';
    }

    if (y === 1) {
        return 1;
    } else {
        return y + sumAll(x, y - 1);
    }
};

// Do not edit below this line
module.exports = sumAll;
