function pairSum(nums, target) {
    let valueMap = new Map();
    let value = 0;
    if(nums.length <= 1){
        throw "Array must be of length more than 1";
    }
    for (let i = 0 ; i < nums.length; i++) {
       value = target - nums[i];
        if(valueMap.has(value)) {
            return true;
        }
        valueMap.set(nums[i],target);
    }
    return false;
}

// Do not edit this line;
module.exports = pairSum;