// Array Methods----------------------------------->

const array = [
  { id: 1, firstName: "aditya", age: 20, lastName: "patil" },
  { id: 2, firstName: "rohan", age: 30, lastName: "sharma" },
  { id: 3, firstName: "nikhil", age: 35, lastName: "yadav" },
  { id: 4, firstName: "sunil", age: 25, lastName: "yadav" },
];

// Map---------------------------------------->
array.map((singleObject) => console.log(singleObject));

// FindIndex----------------------------------->
const someName1 = "sunil";
const indexFind = array.findIndex(
  (singleObject) => singleObject.firstName == someName
);
console.log(indexFind)

// Find--------------------------------------->
// find user by age------------->
const someAge = 25;
const findUser = array.find((singleObject) => singleObject.age == someAge);
console.log(findUser);

// find user by id---------------->
const someId = 1;
const findUserWithId = array.find((singleObject) => singleObject.id == someId);
console.log(findUserWithId);

// Sorting an array----------------------------->
// By using pre-defined Method---->
const numbers1 = [5, 2, 7, 6, 3, 4];
console.log(numbers1.sort());

// By using some method--------------->
// Ascending order-------------->
const numbers2 = [4, 2, 10, 58, 103, 45, 46, 37, 2];
console.log(numbers2.sort((a, b) => a - b));

// Descending order------------>
const numbers3 = [4, 2, 10, 58, 103, 45, 46, 37, 2];
console.log(numbers3.sort((a, b) => b - a));

// Filter------------------------------------------->
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const wordsWithTargetedLength = words.filter(
  (singleElement) => singleElement.length > 5
);

console.log(wordsWithTargetedLength);
