// const myArr = [1, () => console.log("123"), "string"];

// console.log(myArr);
// console.log(typeof myArr);
// console.log(Array.isArray(myArr));

// const newArray = new Array(5);
// newArray[6] = 6;

// console.log(newArray);

// const user = {
//     id: 1,
//     name: "Vasya",
//     data: [1, 2, 3, 4],
// };

//многомерные массивы

// const myArr = [
//     [1, 2],
//     [3, 4],
//     [5, 6, [7, 8]],
// ];

// console.log(myArr[2][2][0]);

// const myArr = [1, 2, 3, 4, 5];

// myArr[1000] = 10;

// console.log(myArr);

// const myArr = ["один", "два", "три"];
// myArr.push("четыре", "пять"); // добавляет элемент в конец массива
// myArr.unshift("ноль"); // добавляет элемнт в начало массива
// myArr.shift(); //удаляет первый элемент массива
// myArr.pop(); //удаляет последний элемент массива

// myArr.reverse().push("ноль");

// console.log(myArr);

// const myArr = [1, 2, 4];
// console.log(myArr.includes(5));

// полезные методы массивов

// find

// const myArr = ["Один", "Два", "Три", "Четыре"];
// const users = [
//   { id: 1, name: "Vasya" },
//   { id: 2, name: "Olga" },
//   { id: 3, name: "Petya" },
//   { id: 4, name: "Maksim" }
// ];

// const foundUser = users.find((user) => { user.id === 2 })

// console.log(foundUser);
// const foundItem = myArr.find((elem) => elem === "Два");

// let foundItem = "";

// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] === "Два") foundItem += myArr[i]
// }

// console.log(foundItem);

// filter
// const users = [
//     { id: 1, name: "Vasya", isAdmin: false },
//     { id: 2, name: "Olga", isAdmin: false },
//     { id: 3, name: "Petya", isAdmin: true },
//     { id: 4, name: "Maksim", isAdmin: false }
//   ];

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbersArr = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbersArr);

// const notAdminUsers = users.filter((user) => !user.isAdmin);

// let notAdminUsers = [];

// for (let i = 0; i < users.length; i++) {
//     if (!users[i].isAdmin) notAdminUsers.push(users[i])
// }

// console.log(notAdminUsers);

// map

// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Olga", isAdmin: false },
//   { id: 3, name: "Petya", isAdmin: true },
//   { id: 4, name: "Maksim", isAdmin: false }
// ];

// // const modifiedUsers = users.map((user) => user.name)
// const modifiedUsers = users.map((user) => {
//     return { ID: user.id, userName: user.name }
// })

// console.log(modifiedUsers);

// forEach 

// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Olga", isAdmin: false },
//   { id: 3, name: "Petya", isAdmin: true },
//   { id: 4, name: "Maksim", isAdmin: false }
// ];

// let myVar = 1;
// let myVar2 = myVar;

// myVar2 = 3;

// console.log(myVar);
// console.log(myVar2);

// const myObject = {name: "Vasya"};
// const myObject2 = myObject;

// myObject2.name = "Petya";

// console.log(myObject, myObject2);

// const myObject = {name: "Vasya"};
// const myObject2 = Object.assign({}, myObject);
// const myObject2 = { ...myObject }

// const { name } = myObject2;
// console.log(name);
// myObject2.name = "Petya";

// console.log(myObject, myObject2);

// const myArray = [5, 4, 2, 6];

// const myArray2 = [10, 12, 8];

// const newArray = [...myArray, ...myArray2];

// console.log(newArray);

// const myFunc = (arg1, arg2, ...args) => {
//   console.log(arg1);
//   console.log(arg2);
//   console.log(args);
// }

// myFunc(5, 2, 4, 7, 10, 20)


// const myObject = { name: "Vasya", age: 20, gender: "male"};

// const newArray = [];

// for (let key in myObject) {
//   newArray.push(myObject[key])
// }

// console.log(newArray);

