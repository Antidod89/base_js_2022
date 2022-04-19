/**
 * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
 * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
 * Сложность задачи: 1 of 5
 * @param {number} arraySize - размер массива
 * @param {?} value - значение для массива
 * @returns {Array}
 */

// 1 решение - решение через цикл
// const fill = (arraySize, value) => {
//   let result = [];
//   for (let i = 0; i < arraySize; i++) {
//     result.push(value);
//   }
//   return result;
// };

// 2 решение
// const fill = (arraySize, value) => {
//   return new Array(arraySize).fill(value);
// };

// const data = 3;
// const valueToFill = "a";
// console.log(fill(data, valueToFill));

/**
 * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
 * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
 * Сложность задачи: 1 of 5
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */
// const reverse = (array) => {
//   let result = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     result.push(array[i]);
//   }
//   return result;
// };

// const data = [1, 2, 3];
// console.log(reverse(data));

/**
 * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
 * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Сложность задачи: 1 of 5
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */
// const compact = (array) => {
//     return array.filter((elem) => elem);
//    }

//    const data = [0, 1, false, 2, undefined, '', 3, null];
//    console.log(compact(data)) // [1, 2, 3]

//Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

// const isEven = (a, b) => {
//   if (a % 2 === 0 && b % 2 === 0) {
//     return a + b;
//   } else if (a % 2 != 0 && b % 2 != 0) {
//     return a + b;
//   } else if (a % 2 != 0 && b % 2 === 0) {
//     return a;
//   } else {
//     return b;
//   }
// };

// console.log(isEven(3, 2));
