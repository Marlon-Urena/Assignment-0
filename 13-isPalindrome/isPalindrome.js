function isPalindrome(word) {
    let iterations = Math.ceil(word.length/2);
    let start = 0, end = word.length - 1;
    for (let i = 0; i < iterations; i++) {
        if (word[start] !== word[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
// Do not edit this line;
module.exports = isPalindrome;