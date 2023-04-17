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
    const nextStr = s.substring(1);
    const nextStrList = getSubStringList(nextStr);
    const currentStrList = nextStrList.map((nextStr: string) => {
        return s.charAt(0) + nextStr;
    });
    result.push(...currentStrList);
    result.push(...nextStrList);
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