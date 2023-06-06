// // Functions

// var num1 = 1234;
// var num2 = 9875;

// function addition(num1, num2) {
//   console.log(num1 + num2);
// }

// addition(num1, num2);

// var num1 = 2345;
// var num2 = 8763;

// function subtraction() {
//   var sub = num1 - num2;
//   console.log(sub, "subtraction");

//   if (sub > 0) {
//     return sub;
//   } else if (sub == 0) {
//     return "sub is greater than 0";
//   } else {
//     return "sub is not equal to zero or not greater than zero";
//   }
// }

// // var result = subtraction();
// // console.log(subtraction());
// // subtraction();

// // Q . Find two numbers from given array which addition is equal to target

// var array = [2, 345, 56, 78, 34, 67, 4, 76, 34, 64, 34, 767];
// var target = 6;

// function additionOfNumbers(santosh, tar) {
//   for (var i = 0; i < santosh.length - 1; i++) {
//     for (var j = i + 1; j < santosh.length; j++) {
//       if (santosh[i] + santosh[j] == tar) {
//         console.log(santosh[i], santosh[j]);
//       }
//     }
//   }
// }

// additionOfNumbers(array, target);

// Q. Find the subtraction of given two numbers by using function.

var number1 = 9876;
var number2 = 5678;

function subtraction() {
  return number1 - number2;
}

console.log(subtraction());

// Q. Find the multiplication of given two numbers by using function.

var number3 = 9876;
var number4 = 5678;

function multiplication() {
  return number3 * number4;
}

console.log(multiplication());

// Q. Find the dividation of given two numbers by using function.

var number5 = 9876;
var number6 = 5678;

function divide() {
  return number5 / number6;
}

console.log(divide());

// Q. Find three numbers from given array who's addition is equal to target.

var array3 = [34, 45, 56, 67, 78, 34, 76, 234, 567, 7834, 56, 34];
var target = 15;
var flag = false;

function additionOfThreeNumbers(array, target) {
  for (var i = 0; i < array.length - 2; i++) {
    for (var j = i + 1; j < array.length - 1; j++) {
      for (var k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] == target) {
          flag = true;
          console.log(array[i], array[j], array[k]);
        }
      }
    }
  }
  if (flag == false) {
    console.log("Target Not Found!");
  }
}

additionOfThreeNumbers(array3, target);
// console.log();
