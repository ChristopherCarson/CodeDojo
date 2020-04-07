var array = [1, 3, 1, 3, 2, 1];

var mostFreq = array => {
    var most = 0;
    var maxItem = null;
    var hashTable = {};

    for (var i = 0; i < array.length; i++) {
        if (hashTable[array[i]] === undefined) {
            hashTable[array[i]] = 1;
        } else {
            hashTable[array[i]] = hashTable[array[i]] + 1;
        }
        if (hashTable[array[i]] > most) {
            most = hashTable[array[i]];
            maxItem = array[i];
        }
    }
    return maxItem;
};

console.log(mostFreq(array));