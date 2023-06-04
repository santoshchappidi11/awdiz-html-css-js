// var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1, 1];

// for (var i = 0; i < array.length - 2; i++) {
//   for (var j = i + 1; j < array.length; j++) {
//     // console.log(array[i], "-->array[i]", array[j], "-->array[j]");
//     // console.log(array[i] + array[j], "-->Total", target);

//     if (array[i] + array[j] == target) {
//       console.log(array[i], array[j], "got it");
//     }
//   }
// }

// for (var i = 0; i < array.length - 2; i++) {
//   for (var j = i + 1; j < array.length - 1; j++) {
//     for (var k = j + 1; k < array.length; k++) {
//       //   console.log(
//       //     "array[i]-->",
//       //     array[i],
//       //     "array[j]-->",
//       //     array[j],
//       //     "array[k]-->",
//       //     array[k]
//       //   );
//       if (array[i] + array[j] + array[k] == target) {
//         console.log(array[i], array[j], array[k], "got it");
//       }
//     }
//   }
// }

// Addition 4 numbers---->

var target = 25;
var array = [
  2, 3, 5, 5, 32, 54, 23, 12, 45, 23, 43, 1, 34, 65, 1, 54, 6, 33, 4, 9, 7,
];

for (var i = 0; i < array.length - 3; i++) {
  for (var j = i + 1; j < array.length - 2; j++) {
    for (var k = j + 1; k < array.length - 1; k++) {
      for (var l = k + 1; l < array.length; l++) {
        if (array[i] + array[j] + array[k] + array[l] == target) {
          console.log(
            array[i],
            "+",
            array[j],
            "+",
            array[k],
            "+",
            array[l],
            "=",
            array[i] + array[j] + array[k] + array[l],
            "got it"
          );
        }
      }
    }
  }
}
