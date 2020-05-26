function sumOfMinimumAndMaximum(nums) {
    let maxNum = -1, minNum = Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        if(maxNum < nums[i])
            maxNum = nums[i];
        if(minNum > nums[i])
            minNum = nums[i];
    }
    return minNum + maxNum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;