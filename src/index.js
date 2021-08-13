
exports.min = function min (array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    let min = array[0]
    array.forEach(item => item < min ? min = item : null);
    return min;
}

exports.max = function max (array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    let max = array[0]
    array.forEach(item => item > max ? max = item : null);
    return max;
}

exports.avg = function avg (array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    return array.reduce((acc, item) => acc + item) / array.length;
}
