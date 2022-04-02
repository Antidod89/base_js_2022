// console.log(this);

// const myObject = {
//     name: "Vasya",
//     callName: function() {
//         console.log(this);
//         console.log(this.name);
//     }
// }

// myObject.callName();

// Практика

// Создать объект который будет описывать любой населенный пункт (на ваш выбор). Объект должен содержать свойства описывающие: название и численность. Так же объект должен содержать два метода: первый должен возвращать название города, а второй должен возвращать численность. 
// *Дополнительно, добавить метод, который будет устанавливать новое значение для выбранного свойства из объекта описывающего город.

// const city = {
//     name: "N. Novgorod",
//     population: 1000000,
//     showName: function() {
//         console.log(this.name);
//     },
    // showPopulation: function() {
    //     console.log(this.population);
    // },
    // changeKeyValue: function(key, newValue) {
    //     switch (key) {
    //         case "name":
    //         this.name = newValue;
    //         return;
    //         case "population":
    //         this.population = newValue;
    //         return;
    //         default:
    //             console.log("ключ не найден");
    //         return
    //     }
    // }
// }

// city.showName();
// city.showPopulation()
// city.changeKeyValue("name", 20000)

// const say = function(phrase,phrase2) {
//     console.log(`${this.name}: ${phrase}`);
//     console.log(phrase2);
// }

// const myObject = {
//     name: "Vasya",
// }

// const newObject = {
//     name: "Petya",
// }

// const argsArr = ["привет", "phrase"];

// say.apply(myObject, argsArr);
// say.call(myObject, argsArr);
// // say.call(newObject, "и тебе привет","phrase");
// const boundFunc = say.bind(newObject, "и тебе привет","phrase");
// boundFunc();


// Практика
// Создайте второй объект описывающий город (первый возьмите из решения задачи №1). Второй объект должен содержать только свойства названия и численность.
// Используя метод call() / apply() вызовите методы объекта первого города в контексте объекта второго города.
// Используя метод bind(), изменить свойства объекта второго города на произвольные значения.

// const myCity = {
//   name: "Moscow",
//   population: 10000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation: function () {
//     console.log(this.population);
//   },

//   changeKeyValue: function (key, newValue) {
//     switch (key) {
//       case "name":
//         this.name = newValue;
//         return;
//       case "population":
//         this.population = newValue;
//         return;
//       default:
//         console.log("Ключ не найден");
//         return;
//     }
//   },
// };

// const newCity = {
//     name: "N. Novgorod",
//     population: 50000,
// };

// myCity.showName.call(newCity)
// myCity.showPopulation.call(newCity)
// myCity.changeKeyValue.call(newCity, "name", "NY")
// myCity.changeKeyValue.apply(newCity, ["name", "NY"];

// const boundFunc = myCity.changeKeyValue.bind(newCity, "name", "LA")

// boundFunc()

// console.log(newCity);

// замыкание

// const myFunc = () => {
//     const myVar = 5;

//     return (param) => {
//         console.log(myVar + param);
//     }
// }

// myFunc()(10)

// коррирование

// const myFunc = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }

// console.log(myFunc(2)(3)(10));

// практика

// Используя замыкание написать функцию которая будет вычислять объём параллелепипеда с высотой 10. 

// const myFunc = () => {
//     const height = 10;

//     return (length, width) => {
//         console.log(length * width * height);
//         // return length * width * height;
//     }
// }

// myFunc()(6, 9)

// Используя каррирование написать функцию которая будет вычислять объём параллелепипеда.

// const myFunc = (a) => {
//     return (b) => {
//         return (c) => {
//             return a * b * c
//         }
//     }
// }
// console.log(myFunc(10) (6) (9));
