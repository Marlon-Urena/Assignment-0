function fizzBuzz(start, end) {
    let length = end - start + 1, value=start-1;
    let array = new Array(length);
    for(let i = 0; i < length; i++) {
        value++;
        if(value % 3 === 0 && value % 5 === 0) {
            array[i] = 'FizzBuzz';
        }
        else if (value % 3 === 0)
            array[i] = "Fizz";
        else if (value % 5 === 0)
            array[i] = "Buzz";
        else
            array[i] = value;
    }
  return array;
}

// Do not edit this line;
module.exports = fizzBuzz;