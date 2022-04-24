// const myObj = { name: "Vasya", surname: "Ivanov", age: 20 };
// const myObjJson = '{"name":"vasya", "suname":"Ivanov", "age": "20"}';

// JSON.stringify
// console.log(JSON.stringify(myObj));

//JSON.parse
// console.log(JSON.parse(myObjJson));
//копирование обекта
// const newObj = JSON.parse(JSON.stringify(myObj));

// try {
//     const parsedStr = JSON.parse(myObj);
//     console.log(parsedStr);
// } catch (e) {
//     throw new Error ("ошибка в блоке try")
// } finally {
//     console.log("выполнится в любом случае");
// }

// Запросы на сервер
// XHR
// https://httpstat.us/
// "https://jsonplaceholder.typicode.com/users"

// методы запросов

// Цикл CRUD - create/read/update/delete
// GET - получение информации
// POST - созданеи данных
// PUT - изменение данных
//DELETE - удалени данных

// const xhr = new XMLHttpRequest();
const URL = "https://jsonplaceholder.typicode.com/users";
// xhr.open('GET', URL);
// xhr.send();
// xhr.onload = () => {
//     console.log(JSON.parse(xhr.response));
// }
// xhr.error = () => {
//     console.log("Ошибка");
// }

//fetch

// const sendRequest = function (url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((res) => console.log(res))
//     .catch((e) => console.error(e))
//     .finally(() => console.log("выполнить в любом случае"))
// };

// const sendRequest = async (url, fetchParams = {}) => {
//     const response = await fetch(url, fetchParams);
//     result = await response.json();

//     return result;
//   };

//   const user = { name: "Vasya", surname: "Ivanov" };

//   const fetchParams = {
//     method: "POST",
//     body: JSON.stringify(user),
//     header: { "Content-Type": "application/json" },
//   };

//   sendRequest(URL, fetchParams).then((res) => console.log(res));

//   sendRequest(`${URL}/1`).then((res) => console.log(res));

// MAP, SET

// MAP

// const myObj = { name: "Vasya", surname: "Ivanov" };
// const myObjToArray = [
//   ["name", "Vsaya"],
//   ["surname", "Ivanov"],
// ];

// const map = new Map(Object.entries(myObj))
// map.set("newKey", "newValue")
// console.log(map.get('newkey'));
// console.log(map.has("surname"));
// map.delete("name")
// console.log((map.size));
// console.log(map);
// map.set({someField: "123"}, "fieldValue")

// for (let [key, value] of map) {
//     console.log(key, value);
// }

// SET

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const set = new Set(myArray);
// console.log([...set]);

// const getUniqueValues = (arr) => {
//     return [...new Set(arr)];
// }

// console.log(getUniqueValues(myArray));

//микротаски - промисы (код в методах then/catch/finally)

//макротаски -settimeout/setInterval

// console.log("Hello");
// console.log("hello there");

// setTimeout(() => console.log("timeput"), 2000);

// const promise = new Promise(() => console.log("promise resolved")).then();

// console.log("hello 3");
