// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// let getSquareOfNumber = (calcValue) => {
//     const result = calcValue ** 2;
//     return result;
// };

// console.log(getSquareOfNumber(5));

// 2. Сделайте функцию, которая возвращает сумму двух чисел.

// function calcValue(a, b) {
//     return a + b;
// }
// const result = calcValue(5, 10)
// console.log(result);

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function calcValue(a, b, c) {
//         return (a - b) / c ;
//     }

// const result = calcValue(30, 10, 5)
// console.log(result);

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// const value = 1;

// const getDayOfTheWeek = (day) => {
//     switch (day) {
//         case 1:
//           console.log("Понедельник");
//           break;
//         case 2:
//           console.log("Вторник");
//           break;
//         case 3:
//           console.log("Среда");
//           break;
//         case 4:
//           console.log("Четверг");
//           break;
//         case 5:
//           console.log("Пятница");
//           break;
//         case 6:
//           console.log("Суббота");
//           break;
//         case 7:
//           console.log("Воскресенье");
//           break;
//         default:
//             console.log("Число не соответствует дню недели");
// }
// };

// getDayOfTheWeek(value);

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// const comparisonValue = (a, b) => {
//     return a === b;
// };

// console.log(comparisonValue(2, 3));

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// const comparisonValue = (a, b) => {
//     return a + b > 10;
// };

// console.log(comparisonValue(6, 4));

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// const invNumber = (a) => {
//     return Math.sign(a) === -1;
// };

// console.log(invNumber(1));

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = (a) => {
//     return a > 0 && a < 10;
// };

// console.log(isNumberInRange(11));

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// const array = [10, 1, 5, 15, 30, 6, 9, 3, 12];
// let newArray = [];

// for (i = 0; i < array.length; i++) {
//     if (isNumberInRange(array[i])){
//         newArray.push(array[i]);
//     }
// }

// console.log(newArray);

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// const getDigitsSum = (num) => {
//     let sum = 0;
//     let toStr = String(num);
//     for (let i = 0; i < toStr.length; i++) {
//         sum += +toStr[i];
//     }
//     return sum;
// }
// console.log(getDigitsSum(2020));

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// for (let i = 1; i < 2020; i++) {
//     if (getDigitsSum(i) === 13) {
//         console.log(i);
//     }
// }

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// const isEven = (num) => {
//     return num % 2 === 0;
// }

// console.log(isEven(2));

// 13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// const array = [10, 2, 5, 0, 30, 6, 9, 8, 12];
// let newArray = [];

// for (i = 0; i < array.length; i++) {
//     if (isEven(array[i])){
//         newArray.push(array[i]);
//     }
// }

// console.log(newArray);

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// const getDivisors = (num) => {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(getDivisors(22));

// 15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// const isSumLess = (num) => {
//   let valueToString = String(num);
//   let sum = 0;
//   for (let i = 0; i < valueToString.length; i++) {
//     sum += +valueToString[i];
//   }
//   if (sum > 9) {
//     isSumLess(sum);
//   } else {
//     console.log(sum);;
//   }
// };

// isSumLess(1598);

// 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

// const palindrome = "Анна";

// const isPalindrome = (str) => {
//     str = str.toLowerCase();
//     return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome(palindrome));


// Работа с for для массивов

// 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

// 2. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// const arr = [1, 2, 3, 4, 5]; 

// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     result += +arr[i];
// }
// console.log(result);

// Задачи общие.

// 1. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// const arr = [2, 5, 15, 0, 4];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// 2. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// const arr = [5, 1, -5, 6, -9, 9, -15];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         result += +arr[i];
//     };
// };
// console.log(result);

// 3. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const arr = [1, 2, 5, 9, 4, 13, 4, 10];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         console.log("Есть");
//     };
// };

// 4. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// const arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
//     const value = arr[i].toString();
//     if (value[0] === "1" || value[0] === "2" || value[0] === "5") {
//         console.log(arr[i]);
//     }
// }

// 5. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = "";
// for (let i = 0; i < arr.length; i++) {
//     result += "-" + arr[i];
// }
// console.log(result);

// 8. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let num = 0;

// for (let n = 1000; n > 50; num++) {
//     n /= 2;
//     console.log(n);
// }

// console.log(`Количество итераций - ${num}`);