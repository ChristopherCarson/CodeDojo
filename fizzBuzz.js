const n = 30;

var fizzBuzz = (n) => {
    string = '';

    for (let i = 1; i < n; i++) {
        if (i % 15 === 0) {
            string += ' fizzBuzz';
        } else if (i % 3 === 0) {
            string += ' fizz';
        } else if (i % 5 === 0) {
            string += ' buss';
        } else {
            string += ' ' + i;
        }
    }
    return string;
};

console.log(fizzBuzz(30));