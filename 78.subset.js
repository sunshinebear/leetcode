/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const numsLength = nums.length;
    if (numsLength === 0) {
        return [];
    }
    let resultArr = [];
    resultArr.push([], nums);
    if (numsLength === 1) {
        return resultArr;
    }
    for (let i = 1; i < numsLength; i++) {
        // 迭代取出
        const pickedNums = pickNumsFromArr(i, nums);

        pickedNums.forEach((numItem)=>{
            resultArr.push(numItem);
        })
    }
    return resultArr;
};

var pickNumsFromArr = function (count, nums) {
    if (count === 1) {
        return nums.map(x => [x]);
    }
    if (count === nums.length) {
        return [nums];
    }

    if(count > nums.length){
        return [];
    }

    // 选中第一个，那么就从剩下的数组中选择count-1个
    // 不选中第一个，就从剩下的数组中渲染 count 个
    const restArr = [].concat(nums).slice(1, nums.length);
    const pickFirstOneConditionArray = pickNumsFromArr(count - 1, restArr);
    const pickFirstOneResult = pickFirstOneConditionArray.map((item) => {
        return [nums[0], ...item];
    });
    const restResult = pickNumsFromArr(count, [].concat(nums).slice(1, nums.length));
    return [...pickFirstOneResult, ...restResult];
}

console.dir(subsets([1, 2, 3]));