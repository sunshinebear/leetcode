function longestCommonPrefix(strs: string[]): string {
    let prefix = '';
    if (strs.length === 0) {
        return prefix;
    }
    if (strs.length === 1) {
        return strs[0];
    }
    let isDifferent = false;
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0].charAt(i);
        for (let j = 0; j < strs.length; j++) {
            const currentStr = strs[j];
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
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));