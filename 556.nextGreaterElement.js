let topNumber = Math.pow(2, 31) - 1;
function nextGreaterElement(n) {
    var x = n + '';
    var allArr = generateArr(x);
    var result = -1;
    allArr.forEach(function (item) {
        if (item > n) {
            if (result === -1) {
                result = item;
            }
            if (item < result) {
                result = item;
            }
        }
    });
    if (result >= topNumber) {
        return -1;
    }
    return result;
};

function generateArr(str) {
    var resultArr = [];
    var len = str.length;
    var arrangeArr = function (leftArr, rightArr) {
        if (leftArr.length === len) {
            const arrangeNum = Number(leftArr.join(''));
            if (arrangeNum < topNumber)
            resultArr.push(arrangeNum);
        } else {
            rightArr.forEach(function (item, index) {
                var temp = [].concat(rightArr);
                temp.splice(index, 1);
                arrangeArr(leftArr.concat(item), temp);
            });
        }
    };
    arrangeArr([], str.split(''));
    return resultArr;
}

console.log(nextGreaterElement(2147483476));