function longestCommonPrefix(strs) {
    var prefix = '';
    if (strs.length === 0) {
        return prefix;
    }
    if (strs.length === 1) {
        return strs[0];
    }
    var isDifferent = false;
    for (var i = 0; i < strs[0].length; i++) {
        var char = strs[0].charAt(i);
        for (var j = 0; j < strs.length; j++) {
            var currentStr = strs[j];
            if (currentStr.charAt(i) !== char) {
                isDifferent = true;
                break;
            }
        }
        if (isDifferent) {
            return prefix;
        }
        prefix += char;
    }
    return '';
}
;
console.log(longestCommonPrefix(["flower","flower","flower","flower"]));
