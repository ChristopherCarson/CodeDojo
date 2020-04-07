//Two numbers that mutliply to 20

var array = [2, 4, 1, 6, 5, 40, -1];

var findTwo = (a, d) => {
    var t = new Array();
    var answer = new Array();
    var div;

    for (var i = 0; i < a.length; i++) {
        div = d / a[i];
        if (t.indexOf(div) > -1) {
            answer[0] = a[i];
            answer[1] = i;
            return answer;
        }
        t.push(a[i]);
    }
    return false;
};

var findThree = (a, d) => {
    var answer = new Array();
    var t = new Array();
    var div;
    var two;

    for (var i = 0; i < a.length; i++) {
        div = d / a[i];

        two = findTwo(a, div);
        if (two != false) {
            answer[0] = two[0];
            answer[1] = two[1];
            answer[2] = a[i];
            return answer;
        }
        t.push(a[i]);
    }
    return false;
};

console.log(findThree(array, 20));