// 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// const timer = (start, end) => {
//   --start;
//   if (start > end) {
//     console.log(start);
//     setTimeout(() => timer(start, end), 1000);
//   } else {
//     console.log(`Работа таймера завершена на ${start} сек.`);
//   }
// };
// timer(60, 56);

// 2. Что выведет функция?
// function f() {
//   alert(this);
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();
// выведет object Window

// 3. Можем ли мы изменить this дополнительным связыванием?
// function f() {
//   alert(this.name);
// }

// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

// f();
// выведет Вася

// 4. В свойство функции записано значение. Изменится ли оно после применения bind?
// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася",
// });

// alert(bound.test);

// выведет undefined, т.к. у bound нет свойства test

// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//  let password = prompt("Password?", '');
//  if (password == "rockstar") ok();
//  else fail();
// }

// let user = {
//  name: 'Вася',

//  loginOk() {
//    alert(`${this.name} logged in`);
//  },

//  loginFail() {
//    alert(`${this.name} failed to log in`);
//  },

// };

// askPassword(user.loginOk, user.loginFail);

// решение

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "Вася",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",
//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));

// 7. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value.

// var elem = { value: "Привет" };

// function func(surname, name) {
//   alert(this.value + ", " + surname + " " + name);
// }

// func = func.bind(elem);

// func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'


//  Eсть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem.

// const elem = { a: 10, b: 6, c: 4 };

// function sum() {
//   return this.a + this.b + this.c;
// }
// func = sum.bind(elem);

// console.log(func());


// 8. Есть функция которая складывает три числа.Выполните каррирование.

// const sum = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };
// console.log(sum(10)(6)(9));
