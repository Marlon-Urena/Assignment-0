function sumOfNumsWithinARange(nums, start, end) {
     let count=0, position, endOfArray=nums.length;
     position = nums.indexOf(start);
     if(position===-1)
         return 0;

    while(position !== endOfArray) {
        if (nums[position] === end) {
            count++;
            break;
        }
        count++;
        position++;
    }

    return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;

// for (let i = position; i < nums.length; i++) {
//     if (nums[i] === end) {
//         count++;
//         break;
//     }
//     count++;
// }