// 是否合理的子字符串
function isValidStr(s: string): boolean {
    const charMap: { [key: string]: boolean } = {};
    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charAt(i);
        if (charMap[currentChar] === true) {
            return false;
        }
        charMap[currentChar] = true;
    }
    return true;
}

// 得到所有的子字符串
function getSubStringList(s: string): string[] {
    const result: string[] = [];
    const sLen = s.length;
    if (sLen === 1) {
        return [s];
    }
    let a = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            result.push(s.substring(i, j));
        }
    }
    return result;
}

function lengthOfLongestSubstring(s: string): number {
    let result = 0;
    const subStrings = getSubStringList(s);
    subStrings.forEach((sub: string) => {
        if (isValidStr(sub)) {
            result = Math.max(sub.length, result);
        }
    });
    return result;
};

console.log(lengthOfLongestSubstring('pwwkew'));