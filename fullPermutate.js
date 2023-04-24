function fullPermutation(str) {
    const result = [];
    const strLen = str.length;
    if (strLen === 1) {
        result.push(str);
    } else {
        for (let i = 0; i < strLen; i++) {
            const currentCharStr = str.charAt(i);
            const restStr = str.substring(0, i) + str.substring(i + 1, strLen);
            const subFullPermutation = fullPermutation(restStr);
            subFullPermutation.forEach((sub) => {
                result.push(currentCharStr + sub);
            })
        }
    }
    return result;
}

console.log(fullPermutation('abc'));