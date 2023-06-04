// Nested For Loop

// Q Given an target value, find the addition of two numbers from an array which matches the target value.

var target = 93;
var array = [3, 54, 65, 32, 6, 23, 56, 76, 17];

for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] == target) {
      console.log(
        array[i],
        "+",
        array[j],
        "=",
        array[i] + array[j],
        "Got the target "
      );
    }
    // console.log(array[i], "+", array[j], "=", array[i] + array[j]);
  }
}
