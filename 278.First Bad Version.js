var x = [false, false, false, false, true, false];

function isBadVersion(n) {
    return x[n];
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let startCursor = 1;
        let endCursor = n;
        if (endCursor === 1) {
            return 1;
        }
        while (startCursor + 1 !== endCursor) {
            const middleCursor = Math.floor((startCursor + endCursor) / 2);
            const needFindbackward = !isBadVersion(middleCursor);
            if (needFindbackward) {
                startCursor = middleCursor;
            } else {
                endCursor = middleCursor;
            }
        }
        return isBadVersion(startCursor) ? startCursor : endCursor;
    };
};

solution(isBadVersion)(5);