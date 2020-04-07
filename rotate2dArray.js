var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var array2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

var rotate = array => {
    var temp = new Array();
    var row = new Array();
    var newArray = new Array();

    for (var r in array) {
        row = array[r];
        console.log(row);
        for (var i = 0; i < array.length; i++) {
            temp[i] = array[array.length - 1 - i][r];
        }
        newArray[r] = temp.slice();
    }
    return newArray;
};

console.log(rotate(array));