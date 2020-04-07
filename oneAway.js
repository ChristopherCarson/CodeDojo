var is_one_away = (s1, s2) => {
    var c1 = 0;
    var c2 = 0;
    var dist = 0;
    var longest;
    if (s1.length > s2.length) {
        longest = s1;
    } else {
        longest = s2;
    }

    for (var i in longest) {
        if (s1[c1] !== s2[c2]) {
            dist++;
            if (dist > 1) return false;
            if (s1[c1 + 1] === s2[c2]) {
                c1++;
            } else if (s1[c1] === s2[c2 + 1]) {
                c2++;
            }
        }
        c1++;
        c2++;
    }
    return true;
};

console.log(is_one_away('abcde', 'abcd')); // should return True
console.log(is_one_away('abde', 'abcde')); // should return True
console.log(is_one_away('a', 'a')); // should return True
console.log(is_one_away('abcdef', 'abqdef')); // should return True
console.log(is_one_away('abcdef', 'abccef')); // should return True
console.log(is_one_away('abcdef', 'abcde')); // should return True
console.log(is_one_away('aaa', 'abc')); // should return False
console.log(is_one_away('abcde', 'abc')); // should return False
console.log(is_one_away('abc', 'abcde')); // should return False
console.log(is_one_away('abc', 'abcde')); // should return False