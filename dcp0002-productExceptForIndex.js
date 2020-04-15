var array = [1, 2, 3, 4, 5];

var productExcept = (array) => {
  var final = new Array();
  for (i in array) {
    var val = 1;
    for (p in array) {
      if (i !== p) val *= array[p];
    }
    final[i] = val;
  }
  return final;
};

console.log(productExcept(array));

//A better O(N) solution is create two additional arrays of the same length containing the
//product of all numbers before and after the index.
