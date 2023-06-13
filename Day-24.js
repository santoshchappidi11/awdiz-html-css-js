function register(event) {
  event.preventDefault();
  var name = document.getElementById("name");
  console.log(name.value, "= Name");
  var number = document.getElementById("number");
  console.log(number.value, "= Number");
  var email = document.getElementById("email");
  console.log(email.value, "= Email");
  var password = document.getElementById("password");
  console.log(password.value, "= Password");

  const userData = {
    userName: name.value,
    userNumber: number.value,
    userEmail: email.value,
    userPassword: password.value,
  };

  localStorage.setItem("SomeData", JSON.stringify(userData));

  name.value = "";
  number.value = "";
  email.value = "";
  password.value = "";
}

function getDataFromLocalStorage() {
  var getData = JSON.parse(localStorage.getItem("SomeData"));
  console.log(getData);
}

// OBJECTS------------->

// var myData = {
//   myAge: "35",
//   MyName: "santosh",
//   isTrue: true,
//   someArray: ["awdiz", 1234, false],
//   arrayObject: { mySkills: ["HTML", "CSS", "JS"] },
// };

// console.log(myData.myAge);
// console.log(myData.isTrue);
// console.log(myData.someArray[1]);
// console.log(myData.arrayObject.mySkills[2]);

// var dataFromLocalStorage = JSON.stringify(localStorage.getItem("StudentList"));
// localStorage.setItem("students", "[1,2,3,4,5]");
// localStorage.removeItem("students");

// JSON.stringify(DATA) => JS TO JSON
// JSON.parse(DATA) => JSON TO JS
