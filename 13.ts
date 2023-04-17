enum ROMAN {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000,
}


function getValue(s: string, index: number): number {
    return ROMAN[s.charAt(index)];
}

function romanToInt(s: string): number {
    let result = 0;
    const strLen = s.length;
    let waitForSubtraction = 0;
    for (let i = 0; i < strLen; i++) {
        const currentValue = getValue(s, i);
        const nextValue = getValue(s, i + 1);
        if (nextValue > currentValue) {
            waitForSubtraction += currentValue;
            continue;
        }
        result += currentValue - waitForSubtraction;
        waitForSubtraction = 0;
    }
    return result;
};

console.log(romanToInt('MCMXCIV'));