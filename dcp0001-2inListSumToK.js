var list = [10, 15, 3, 7]

var twoSum = (list, k) => {
    var checked = new Array()

    for (n of list) {
        checked.push(n)
        if (checked.includes((k - n)) === true) {
            return [(k - n), n]
        }
    }
}

console.log(twoSum(list, 17))