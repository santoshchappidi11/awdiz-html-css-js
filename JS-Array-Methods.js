// --forEach()--------------------------------------->
// The forEach() method executes a provided function once for each array element.
// const array = ["a", "b", "c"];
// array.forEach((item) => console.log(item));

// --at()-------------------------------------------->
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
// Negative integers count back from the last item in the array.
// const array = [5, 12, 8, 130, 44];
// let positiveIndex = 3;
// let negativeIndex = -1;
// console.log(
//   `using an index of ${positiveIndex} the item returned is ${array.at(
//     positiveIndex
//   )}`
// );
// console.log(
//   `using an index of ${negativeIndex} the item returned is ${array.at(
//     negativeIndex
//   )}`
// );

// --concat()------------------------------------------------->
// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
// const array1 = [1, 2, 3];
// const array2 = ["a", "b", "c"];
// console.log(array1.concat(array2));

// --copyWithin()------------------------------------------------->
// The copyWithin() method shallow copies part of an array to another location in the same array
// and returns it without modifying its length.
// const array1 = ["a", "b", "c", "d", "e"];
// Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3));

// Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));

// --entries() ------------------------------------------------->
// The entries() method returns a new array iterator object that contains the key/value pairs for each
// index in the array.
// const array = ["a", "b", "c"];
// const iterator = array.entries();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// --every()---------------------------------------------------->
//  The every() method tests whether all elements in the array pass the test implemented by the provided function.
//  It returns a Boolean value.
// const array = [1, 30, 39, 29, 10, 13];
// let result = array.every((item) => item < 40);
// console.log(result);

// --fill()----------------------------------------------------->
// The fill() method changes all elements in an array to a static value,
// from a start index (default 0) to an end index (default array.length). It returns the modified array.
// const array = [1, 2, 3, 4, 5];
// Fill with 0 from position 2 until position 4
// console.log(array.fill(0, 2, 4));
// Fill with 0 from position 2
// console.log(array.fill(0, 2));
// console.log(array.fill(0));

// --filter()------------------------------------------------>
// The filter() method creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const result = words.filter((item) => item.length > 6);
// console.log(result);

// --find()--------------------------------------------------------->
// The find() method returns the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
// const array = [5, 12, 8, 130, 44];
// const found = array.find((item) => item > 10);
// console.log(found);

// --findIndex()--------------------------------------------------------->
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.
// const array = [5, 12, 8, 130, 44];
// const isLarge = (array) => array > 13;
// console.log(array.findIndex(isLarge));

// --findLastIndex()--------------------------------------------------------->
// The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.
// const array = [5, 12, 8, 130, 44];
// const found = array.findLast((item) => item > 45);
// console.log(found)

// --flat()--------------------------------------------------------->
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the
// specified depth.
// const array1 = [0, 1, 2, [3, 4]];
// console.log(array1.flat());
// const array2 = [0, 1, 2, [[3, 4]]];
// console.log(array2.flat());

// --flatMap()--------------------------------------------------------->
// const array = [1, 2, 3, [4, 5]];
// const result = array.flatMap((item) => (item === 2 ? [2, 2] : 1));
// console.log(result);

// --includes()--------------------------------------------------------->
// The includes() method determines whether an array includes a certain value among its entries,
// returning true or false as appropriate.
// const array = [1, 2, 3, 4];
// console.log(array.includes(3));
// console.log(array.includes(5));

// --indexOf()--------------------------------------------------------->
// The indexOf() method returns the first index at which a given element can be found in the array,
// or -1 if it is not present.
// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log(beasts.indexOf("ant"));
// console.log(beasts.indexOf("duck"));

// --isArray()---------------------------------------------------------->
// The Array.isArray() static method determines whether the passed value is an Array.
// console.log(Array.isArray([1,2,3]))
// console.log(Array.isArray('[]'))

// --join()----------------------------------------------------------------->
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
// separated by commas or a specified separator string.
// const array = ["Fire", "Air", "Water"];
// console.log(array.join());

// --lastIndexOf()-------------------------------------------------------------->
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1
// if it is not present.
// const array = ["Dodo", "Tiger", "Penguin", "Dodo"];
// console.log(array.lastIndexOf("Dodo"));
// console.log(array.lastIndexOf("Penguin"));

// --map()--------------------------------------------------------------------->
// The map() method creates a new array populated with the results of calling a provided function
// on every element in the calling array.
// const array = [1, 4, 9, 16];
// const mapped = array.map((item) => item * 2);
// console.log(mapped);

// --pop()----------------------------------------------------------------------->
// The pop() method removes the last element from an array and returns that element.
// This method changes the length of the array.
// const array = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// console.log(array.pop());

// --push())----------------------------------------------------------------------->
// The push() method adds the specified elements to the end of an array and returns the new length of the array.
// const array = ["pigs", "goats", "sheep"];
// console.log(array.push("camel"));
// console.log(array)

// --reduce()----------------------------------------------------------------------->
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// The final result of running the reducer across all elements of the array is a single value.
// const array = [1, 2, 3, 4];
// let initialValue = 0;
// const reduceMethod = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(reduceMethod);

// --reverse()----------------------------------------------------------------------->
// The reverse() method reverses an array.
// const array = ['one', 'two', 'three'];
// console.log(array.reverse())

// --shift()----------------------------------------------------------------------->
// The shift() method removes the first element from an array and returns that removed element.
// This method changes the length of the array.
// const array = [1, 2, 3];
// console.log(array.shift());
// console.log(array)

// --slice()----------------------------------------------------------------------->
// The slice() method returns a new array object selected from start to end where start and end represent
// the index of items in that array. The original array will not be modified.
// const array = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(array.slice(4));
// console.log(array.slice(1, 3));

// --some()----------------------------------------------------------------------->
// The some() method tests whether at least one element in the array passes the test It returns true if, in the array, it finds an element
// otherwise it returns false. It doesn't modify the array.
// const array = [1, 2, 3, 4, 5];
// const evenElement = array.some((item) => item % 2 == 0);
// console.log(evenElement);.

// --sort()----------------------------------------------------------------------->
// The sort() method sorts the elements of an array in ascending to descending order
// const array = [5, 3, 8, 2, 1];
// console.log(array.sort());

// --splice()----------------------------------------------------------------------->
// The splice() method changes the contents of an array by removing or replacing existing elements
// and/or adding new elements.
// const array = ["Jan", "March", "April", "June"];
// console.log(array.splice(0, 2));
// console.log(array.splice(1, 0, "July"));
// console.log(array);

// --toString()----------------------------------------------------------------------->
// The toString() method returns a string representing the specified array and its elements.
// const array = [1, 2, "a", "14"];
// console.log(array.toString());

// --unshift()----------------------------------------------------------------------->
// The unshift() method adds the specified elements to the beginning of an array and
// returns the new length of the array.
// const array = [1, 2, 3];
// console.log(array.unshift(4));
// console.log(array);
