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

const isSumLess = (num) => {
    let sum = 0;
    let valueToString = String(num);
    for (let i = 0; i < valueToString.length; i++) {
        sum += +valueToString[i];

        console.log(sum);
        if (sum > 9) {
            console.log(isSumLess(sum));
            // return isSumLess(sum); 
        } 
        }
        
    }
    
isSumLess(656);