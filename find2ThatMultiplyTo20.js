//Two numbers that mutliply to 20

var array = [2, 4, 1, 6, 5, 40, -1];

var findTwo = a => {
    var t = new Array();
    var div;
    var answer = [0, 0];

    for (var i = 0; i < a.length; i++) {
        div = 20 / a[i];
        if (t.indexOf(div) > -1) {
            answer[0] = a[i];
            answer[1] = i;
            return answer;
        }
        t.push(a[i]);
    }
    return answer;
};

console.log(findTwo(array));