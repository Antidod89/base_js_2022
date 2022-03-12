// разбор ДЗ
// const myArray = [10, 20, 30, 50, 3000];

// for (let i = 0; i < myArray.length; i++) {
//     const firstArrayElement = myArray[i].toString();
//     if (firstArrayElement[0] === "1" || firstArrayElement[0] === "2" || firstArrayElement[0] === "5") {
//         console.log(myArray[i]);
//     }
// }
// const myVar = "123222";

// let result1 = 0;
// let result2 = 0;

// for (let i = 0; i < myVar.length; i++) {
//     if (i <= 2) {
//         result1 += +myVar[i];
//     } else {
//         result2 += +myVar[i];
//     }
// }

// result1 === result2 ? console.log("Да") : console.log("Нет");

// function declaration - объявление функции
// function expression функционельное выражение
// arrow function - стрелочная функция


// function showMessage() {
//     console.log("Hello");
// }
// showMessage();

// let user;

// function greetUser(name = "Гость") {
//     console.log(`привет, ${name}`);
// }

// greetUser(user);

// const user = {
//     name: "Maksim",
//     age: 18,
// };

// function checkAccess(age) {
//     if (age < 18) {
//         showDeniedMsg();
//     } else {
//         showAllowedMsg();
//     }
// }
//function expression
// const showDeniedMsg = function() {
//     console.log("Доступ запрещен");
// };
// const showAllowedMsg = function() {
//     console.log('Доступ разрешен');
// };
// checkAccess(user.age);

// Директива return

// function calcValue(a, b) {
//     const result = a + b;
//     return result;
// }

// const result = calcValue(3, 5);
// console.log(result);

// const user = {
//     name: "Maksim",
// }
// const greeMsg = "Привет";
// function getName(user) {
//     return user.name || "гость";
// }

// function sayHi(text, name = getName()) {
// console.log(`${text}, ${name}`);
// }

// sayHi(greeMsg, getName(user));

//функция, использованная внутри функции, называется callback

// Практика

// 1. Написать функцию, которая будет принимать имя пользователя, и выводить строку с приветствием данного пользователя, если имени пользователя нет, выводить приветствие гостя.

// let user = "Maksim";

// function greetUser(name = "Гость") {
//     console.log(`Привет, ${name}`);
// }
// greetUser(user);

// 2. Написать функцию, которая в качестве первого параметра будет принимать численное значение, а в качестве второго параметра будет принимать степень, в которую надо возвести первый аргумент. По умолчанию, второй аргумент единица.

// function myFunc(a, b = 1) {
//     return a ** b;
// }

// let result = myFunc(5, 2);
// console.log(result);

// 3. Написать функцию, которая будет принимать в качестве входного параметра массив любых, целых чисел, и будет возвращать среднее арифметическое значение данного массива*

// const myArray = [5, 10, 15];


// const calcAverageValue = function (arr) {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum /arr.length;
// }

// console.log(calcAverageValue(myArray));

//свой вариант
// let result1 = 0;

// const result3 = function myFunc(result) {
//     for (let i = 0; i < result.length; i++) {
//         result1 += result[i];
//         console.log(result1);
//     };
//     return result1 /result.length;
// };

// console.log(result3(myArray));

// стрелочные функции

// function calcValue(a, b) {
//     const result = a + b;
//     return result;
// }

// const calcValue = (a, b) => a + b;

// const calcValue = (a, b) => {
//     return a + b;
// }

// const result = calcValue(3, 5);
// console.log(result);

// практика

// 1. Напишите стрелочную функцию которая будет выводить переданную строку в консоль n раз.

// свое решение

// const myString = "Строка";

// const limit = 5;

// function myFunc(str, limiter) {
//     for (let i = 0; i < limiter; i++) {
//         console.log(`${str} - ${i}`);
//     }
// }
// myFunc(myString, limit);

// let result = function myFunc(str, limiter) {
//     for (let i = 0; i < limiter; i++) {
//         console.log(`${str} - ${i}`);
//     }
// };

// console.log(result(myString, limit));

// const myFunc = (str, limiter) => {
//     for (let i = 0; i < limiter; i++) {
//     console.log(`${str} - ${i}`);
// }
// }
// console.log(myFunc(myString, limit));

//решение от лектора

// const msgAmount = 10;
// const massage = "Сообщение";
// const showMessage = (msg, count) => {
//     for(i = 1; i <= count; i++) {
//         console.log(`${msg} - ${i}`);
//     }
// }
// showMessage(massage, msgAmount);

// 2. Напишите стрелочную функцию, которая будет принимать в качестве параметра букву и если она гласная, функция будет  возвращать true, в противном случае false . 

// const myChar = "а";

// const isMyCharVowel = (char) => {
//     const vowels = "ауоыиэяюёе";
//     if (vowels.includes(char)) {
//         return "гласная";
//     }
//     return "Не гласная";
// }

// console.log(isMyCharVowel(myChar));

// 3. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

