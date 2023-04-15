var isPalindrome = function(x) {
    let y = String(x);
    const len = y.length;
    const halfLen = Math.round(len / 2);
    for (let i = 0; i < halfLen; i++) {
        let startChar = y[i];
        let endChar = y[len - i - 1];
        if (startChar !== endChar) {
            return false;
        }
    }
    var xx = Number(1);
    return true;
};
isPalindrome(12321);