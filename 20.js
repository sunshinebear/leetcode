var leftCharacters = ['(', '{', '['];
var correspondChar = {
    '(': ')',
    '{': '}',
    '[': ']'
};
function isValid(s) {
    var sLen = s.length;
    var charStack = [];
    for (var i = 0; i < sLen; i++) {
        var char = s.charAt(i);
        if (leftCharacters.indexOf(char) !== -1) {
            charStack.push(char);
            continue;
        }
        var currentBottomChar = charStack[charStack.length - 1];
        var isCorrespondChar = correspondChar[currentBottomChar] === char;
        if (!isCorrespondChar) {
            return false;
        }
        charStack.pop();
    }
    return true;
};
console.log(isValid('(]'));
