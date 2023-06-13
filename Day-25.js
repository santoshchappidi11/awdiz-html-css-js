// var givenArray = [
//   23, 45, 56, 67, 23, 56, 68, 34, 4556, 78, 655, 23, 568787, 89845, 343, 54576,
//   7873, 323, 54, 636, 6836, 575,
// ];

// Find Odd Numbers in an array------------------------------->
// function findOddNumbers(array) {
//   var oddNumers = [];
//   for (var i = 0; i <= array.length; i++) {
//     if (array[i] % 2 == 1) {
//       oddNumers.push(array[i]);
//     }
//   }
//   return oddNumers;
// }

// console.log(findOddNumbers(givenArray));

// Print Numbers from an Array-------------------------------->
// function printNumbers(array) {
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// printNumbers(givenArray);

// Find the numbers who is divisible by 5 from an given range.------------------>

// var start = 455;
// var end = 800;

// function divisibleBy5(start, end) {
//   for (var i = start; i <= end; i++) {
//     if (i % 5 == 0) {
//       console.log(i);
//     }
//   }
// }

// divisibleBy5(start, end);

// var numbers = [1, 5, 8, 45, 63];

// numbers.push(101);
// numbers.push(256);
// numbers.push(500);

// console.log(numbers);

// numbers.pop();
// numbers.pop();
// numbers.pop();

// console.log(numbers);

// var names = ["santosh", "rocky", "shuresh", "aditya", "manoj"];

// names.unshift("sun");
// names.unshift("moon");
// names.unshift("stars");

// console.log(names);

// names.shift();
// names.shift();
// names.shift();

// console.log(names);

// ------------------------------------------------------------------->

// Q.Find numbers who are divisible by 2, 5, and 10 from given range,
//     then use that array to make new array with second element of array.
// (note - use reverse for loop)

var start = 8723;
var end = 6567;

var filteredArray = [];
function twoStage(start, end) {
  for (var i = start; i >= end; i--) {
    if (i % 2 == 0 && i % 5 == 0 && i % 10 == 0) {
      filteredArray.push(i);
    }
  }
  console.log(filteredArray);
}
twoStage(start, end);

// var someNumers = [100, 101, 102, 103, 104, 105];

function skipNumber(array) {
  var skippedNumber = [];
  for (var i = 1; i <= array.length - 1; i = i + 2) {
    skippedNumber.push(array[i]);
  }
  console.log(skippedNumber);
}

skipNumber(filteredArray);
