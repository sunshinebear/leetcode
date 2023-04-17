var ROMAN;
(function (ROMAN) {
    ROMAN[ROMAN["I"] = 1] = "I";
    ROMAN[ROMAN["V"] = 5] = "V";
    ROMAN[ROMAN["X"] = 10] = "X";
    ROMAN[ROMAN["L"] = 50] = "L";
    ROMAN[ROMAN["C"] = 100] = "C";
    ROMAN[ROMAN["D"] = 500] = "D";
    ROMAN[ROMAN["M"] = 1000] = "M";
})(ROMAN || (ROMAN = {}));
function getValue(s, index) {
    return ROMAN[s.charAt(index)];
}
function romanToInt(s) {
    var result = 0;
    var strLen = s.length;
    var waitForSubtraction = 0;
    for (var i = 0; i < strLen; i++) {
        var currentValue = getValue(s, i);
        var nextValue = getValue(s, i + 1);
        if (nextValue > currentValue) {
            waitForSubtraction += currentValue;
            continue;
        }
        result += currentValue - waitForSubtraction;
        waitForSubtraction = 0;
    }
    return result;
}
;
console.log(romanToInt('III'));
