// 是否合理的子字符串
function isValidStr(s) {
    var charMap = {};
    for (var i = 0; i < s.length; i++) {
        var currentChar = s.charAt(i);
        if (charMap[currentChar] === true) {
            return false;
        }
        charMap[currentChar] = true;
    }
    return true;
}
// 得到所有的连续子字符串
function getSubStringList(s) {
    var result = [];
    var sLen = s.length;
    if (sLen === 1) {
        return [s];
    }
    var nextStr = s.substring(1);
    var nextStrList = getSubStringList(nextStr);
    var currentStrList = nextStrList.map(function (nextStr) {
        return s.charAt(0) + nextStr;
    });
    result.push.apply(result, currentStrList);
    result.push.apply(result, nextStrList);
    return result;
}
function lengthOfLongestSubstring(s) {
    var result = 0;
    var subStrings = getSubStringList(s);
    subStrings.forEach(function (sub) {
        if (isValidStr(sub)) {
            result = Math.max(sub.length, result);
        }
    });
    return result;
}
;
console.log(lengthOfLongestSubstring('pwwkew'));
