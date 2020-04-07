var string = 'aacbbzzyy';

var noRepeat = string => {
    var unique = new Array();

    for (let i in string) {
        if (unique.indexOf(string[i]) == -1) {
            unique.push(string[i]);
        } else {
            unique.splice(unique.indexOf(string[i]), 1);
        }
    }
    return unique[0];
};

console.log(noRepeat(string));

//method 2
var noRepeat2 = string => {
    var hash = {};
    for (let i in string) {
        if (hash[string[i]] === undefined) {
            hash[string[i]] = 1;
        } else {
            hash[string[i]] += 1;
        }
    }
    for (let i in string) {
        if (hash[string[i]] === 1) return string[i];
    }
};

console.log(noRepeat2(string));