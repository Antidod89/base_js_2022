// Работа с if-else

// 1.  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = -3;

// if (a === 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = -3;

// if (a > 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = -3;

// if (a < 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = -3;

// if (a >= 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = -3;

// if (a <= 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = -3;

// if (a != 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

// const a = 'test';

// if (a === "test") {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

// const a = 3;

// if (a === "1") {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }


// Работа с логическими переменными

// 1. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

//  const test = true;

// if (test) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let result = test === true ? console.log("Верно") : console.log("Неверно");

// 2. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// const test = true;

// if (test != true) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let result = test != true ? console.log("Верно") : console.log("Неверно");

// Работа с && (и) и || (или)

// 1. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// const a = -3;

// if (a > 0 && a < 5) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let result = a > 0 && a < 5 ? console.log("Верно") : console.log("Неверно");

// 2. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// const a = 2;

// if (a === 0 || a === 2) {
//     console.log(a + 7);
// } else {
//     console.log(a / 10);
// }

// let result = a === 0 || a === 2 ? console.log(a + 7) : console.log(a / 10);

// 3. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// const a = 3;
// const b = 5;

// if (a <= 1  && b >= 3) {
//     console.log(a + b);
// } else {
//     console.log(a - b);
// }

// let result = a <= 1  && b >= 3 ? console.log(a + b) : console.log(a - b);

// 4. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// const a = 3; 
// const b = 13;

// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// На switch-case

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// const num = 4;
// let result;

// switch (num) {
//     case 1:
//         console.log(result = "зима");
//         break;
//     case 2:
//         console.log(result = "весна");
//         break;
//     case 3:
//         console.log(result = "лето");
//         break;
//     case 4:
//         console.log(result = "осень");
//         break;
// }

// Общие задачи

// 1. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = 2;

// if (day >= 1 && day <= 10) {
//     console.log(`День мясяца "${day}" попадает в первую декаду месяца`);
// } else if (day > 10 && day <= 20) {
//     console.log(`День мясяца "${day}" попадает во вторую декаду месяца`);
// } else {
//     console.log(`День мясяца "${day}" попадает в третью декаду месяца`);
// }

// 2.  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// const month = 12;

// if (month >= 1 && month < 3) {
//     console.log("зима");
// } else if (month >= 3 && month < 6) {
//     console.log("весна");
// } else if (month >= 6 && month < 9) {
//     console.log("лето");
// } else if (month >= 9 && month < 12) {
//     console.log("осень");
// } else if (month === 12) {
//     console.log("зима");
// } else {
//     console.log("Не удалость определит пору года. Проверьте введенное значение.");
// }

// 3. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const myString = "abcde";

// if (myString[0] === "a") {
//     console.log("Да");
// } else {
//     console.log("Нет");
// }

// 4. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const myString = "12345";

// if (myString[0] === "1" || myString[0] === "2" || myString[0] === "3") {
//     console.log("Да");
// } else {
//     console.log("Нет");
// }

// 5. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// const myString = "123";
// вариант 1
// let sum = 0;
// for (let counter = 0; counter < 3; counter++) {
//     console.log(sum += +myString[counter]); // sum = myString[0] + myString[1] + myString[2]
// }
//вариант 2
// const sum = Number(myString[0]) + Number(myString[1]) + Number(myString[2]);
// console.log(sum)

// 6. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// решение через цикл
// const myNumber = "511520";
// let firstNumbers = 0;
// let secondNumbers = 0;

// for (let counter = 0; counter < 3; counter++) {
//     firstNumbers += +myNumber[counter];
//     console.log(myNumber[counter]);
// }
// for (let counter = 3; counter < 6; counter++) {
//     secondNumbers += +myNumber[counter];
//     console.log(secondNumbers);
// }

// if (firstNumbers === secondNumbers) {
//     console.log("Да");
// } else {
//     console.log("Нет");
// }

// второе решение
// const myNumber = "123125";
// const firstNumbers = Number(myNumber[0]) + Number(myNumber[1]) + Number(myNumber[2]);
// const secondNumbers = Number(myNumber[3]) + Number(myNumber[4]) + Number(myNumber[5]);

// if (firstNumbers === secondNumbers) {
//     console.log("Да");
// } else {
//     console.log("Нет");
// }

// Циклы while и for

// 1. Выведите столбец чисел от 1 до 100.

// let counter = 0;
// while (counter < 100) {
//     console.log(counter +=1);
// }
// do {
//     console.log(counter +=1);
// } while (counter < 100);

// for (let counter = 1; counter <= 100; counter++) {
//     console.log(counter);
// }

// 2. Выведите столбец чисел от 11 до 33.

// let counter = 10;
// while (counter < 33) {
//     console.log(counter += 1);
// }
// for (let counter = 11; counter <= 33; counter++) {
//     console.log(counter);
// }

// 3. Выведите столбец четных чисел в промежутке от 0 до 100.
// let counter = 0;

// while (counter <= 100) {
//     if (counter > 0 && counter % 2 == 0) {
//         console.log(counter);
//     }
//     counter += 1;
// }

// for (let counter = 0; counter <= 100; counter++) {

//     if (counter % 2 == 0) {
//     console.log(counter);
//     }
// }

// решение через continue
// for (let counter = 0; counter <= 100; counter++) {

//     if (counter % 2 != 0) continue;
//     console.log(counter);
    
// }
// 4. С помощью цикла найдите сумму чисел от 1 до 100.

// let counter = 1;
// let sum = 0;

// while (counter <= 100) {
//     sum += counter;
//     counter++;
// }
// console.log(sum);

// let sum = 0;
// for (let counter = 1; counter <= 100; counter++) {
//     sum += counter
// }
// console.log(sum);

// задачи с лекции 

// 1. вывести в консоль строку N раз

// const myString = "Строка";
// const limit = 15;
// let counter = 1;

// for (let counter = 1; counter <= limit; counter++) {
//     console.log(`${myString} - ${counter}`);
// }
// while (counter < limit) {
//     counter++;
//     console.log(`${myString} - ${counter}`);
// }
// do {
//     counter++;
//     console.log(`${myString} - ${counter}`);
// } while (counter < limit);

//2. Ежедневно количество доступных автомобилей в салоне уменьшается в два раза. Выяснить, на какой день продаж, количество доступных к покупке авто станет меньше M, если известно, что в первый день продаж всего было N автомобилей.

// let carsAmount = 60;
// const minCarsAmount = 10;
// let day = 0;
// for (let day = 1; carsAmount > minCarsAmount; day++) {
//     carsAmount /= 2;
//     if (carsAmount < minCarsAmount) {
//         console.log(`На ${day} день`);
//     }
// }
// while (carsAmount > minCarsAmount) {
//     day++;
//     carsAmount /= 2;
//     if (carsAmount < minCarsAmount) {
//         console.log(`На ${day} день`);
//     }
// }

// do {
//     day++;
//     carsAmount /= 2;
//     if (carsAmount < minCarsAmount) {
//         console.log(`На ${day} день`);
//     }
// } while (carsAmount > minCarsAmount);
