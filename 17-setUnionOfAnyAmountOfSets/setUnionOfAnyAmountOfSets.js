function setUnionOfAnyAmountOfSets(...args) {
    let unionSet = new Set();
    for(let i = 0; i < args.length; i++) {
        for(const value of args[i]){
            unionSet.add(value);
        }
    }
    return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;