var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var binarySearch = (array, n, min = 0, max = array.length) => {
    var pointer = parseInt((min + max) / 2);
    if (array[pointer] == n) {
        return pointer;
    } else if (min == max) {
        return null;
    } else {
        if (n > array[pointer]) {
            min = pointer + 1;
        } else if (n < array[pointer]) {
            max = pointer - 1;
        }
        return binarySearch(array, n, min, max);
    }
};

console.log(binarySearch(array, 7));