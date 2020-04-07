var A = [1, 2, 3, 4, 5, 6, 7, 8];
var B = [4, 5, 6, 7, 8, 1, 2, 3];

var common = (A, B) => {
    if (A.length !== B.length) return false;
    var diffs = new Array();
    var counter = 0;

    for (var i = 0; i < A.length - 1; i++) {
        if (diffs.length === 0) diffs[0] = Math.abs(A[i] - B[i]);
        if (Math.abs(A[i] - B[i]) !== diffs[counter]) {
            counter++;
            diffs[counter] = Math.abs(A[i] - B[i]);
        }
    }
    if (diffs[0] + diffs[1] === A.length && diffs.length === 2) return true;
    return false;
};

console.log(common(A, B));

var A = [1, 2, 3, 4, 5, 6, 7, 8];
var B = [4, 5, 6, 7, 8, 1, 2, 3];

//Method 2
var common2 = (A, B) => {
    if (A.length !== B.length) return false;
    var key = A[0];
    var key_i = -1;
    var j;

    for (var i = 0; i < B.length - 1; i++) {
        if (B[i] == key) {
            key_i = i;
            break;
        }
    }

    if (key_i == -1) {
        return false;
    }

    console.log(A.length);

    for (var i = 0; i < A.length - 1; i++) {
        j = (key_i + i) % A.length;
        if (A[i] != B[j]) return false;
    }
    return true;
};

console.log(common2(A, B));