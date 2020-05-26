function frequencyCounter(word) {
    let letterMap = new Map();
    let letter;
    let count;
  for(let i = 0; i < word.length; i++){
      letter = word.charAt(i);
    if (letterMap.has(letter)) {
        count = letterMap.get(letter);
        letterMap.set(letter,count+1)
    }
    else
        letterMap.set(letter,1);
  }
    return Object.fromEntries(letterMap);
}

// Do not edit this line;
module.exports = frequencyCounter;