const leftCharacters = ['(', '{', '['];
const correspondChar = {
    '(': ')',
    '{': '}',
    '[': ']',
};
function isValid(s: string): boolean {
    const sLen = s.length;
    if (sLen === 1) {
        return false;
    }
    const charStack: string[] = [];
    for (let i = 0; i < sLen; i++) {
        const char = s.charAt(i);
        if (leftCharacters.indexOf(char) !== -1) {
            charStack.push(char);
            continue;
        }
        const currentBottomChar = charStack[charStack.length - 1];
        const isCorrespondChar = correspondChar[currentBottomChar] === char;
        if (!isCorrespondChar) {
            return false;
        }
        charStack.pop();
    }
    return charStack.length === 0;
};

console.log(isValid('()[]{}'));