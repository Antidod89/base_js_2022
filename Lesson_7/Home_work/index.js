// Практика 1

// Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, в качестве результата возвращать сумму четных положительных элементов переданного массива.

// const arr = [1, 2, 10, -15, 5, -4, 5, -1, 10];

// const getsSumOfPositiveNumbers = (arr) => {
//   let sum = 0;
//   arr.map((elem) => (elem > 0 && elem % 2 === 0 ? (sum += +elem) : 0));
//   return sum;
// };

// console.log(getsSumOfPositiveNumbers(arr));

// Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного.

// const arr = [1, 2, 1, 10, 15, 5, 1, 5, 2, 10, 6];

// // первое решение
// const getArrUniqueValues = (arr) => {
//   return Array.from(new Set(arr));
// };

// console.log(getArrUniqueValues(arr));

// второе решение
// const getArrUniqueValues = (arr) => {
//   return arr.filter((elem, pos) => {
//     return arr.indexOf(elem) === pos;
//   });
// };

// console.log(getArrUniqueValues(arr));

// Написать функцию  которая будет принимать два массива, и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// const checkArrForEquality = (arr1, arr2) => {
//     return arr1.length === arr2.length && arr1.every((elem, index) => {
//         return elem === arr2[index];
//     });
// };

// console.log(checkArrForEquality(arr1, arr2));

// Практика 2

// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// const arr = ["Petya", "Vasya", "Ivan", "Maksim"];

// const getLengthOfStrings = (arr) => arr.map((elem) => elem.length);

// console.log(getLengthOfStrings(arr));

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (numbers) => {
//     let result = [];
//     numbers.reduce((accum, current, index) => result[index] = accum + current, 0);
//     return result;
// };

// console.log(currentSums(numbers));

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

// const sumSeven = (numbers) => {
//   const reverseArr = numbers.reverse();
//   return numbers.reduce((accum, current, i) => {
//     reverseArr.forEach((item) => {
//       item + current === 7 ? accum.push(`(${item}:${current})`) : accum;
//     });
//     return accum.slice(0, numbers.length / 2);
//   }, []);
// };

// console.log(sumSeven(numbers));

// 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

// const myString = "lorem ipsum dolor sit amet";

// const getFirstChar = (str) => {
//     return str.split(" ").map((elem) => elem[0]);
// }

// console.log(getFirstChar(myString));

// 5. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// const myString = "LoremIpsum";

// const arr = (str) => {
//   const result = str
//     .split("")
//     .map((elem, i, arr) => arr[i - 1] + elem + arr[i + 1])
//     .join();
//   return result.replace(/undefined/g, "").split(",");
// };

// console.log(arr(myString));

// 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// const arr = [4, 15, 1, 9, -5, 7];

// const getArrDescending = (arr) => {
//     return arr.sort((a,b) => b - a);
// };

// console.log(getArrDescending(arr));

// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// const arr1 = [1, 2, 3];
// const arr2 = [9, 10, 7];
// const arr3 = [5, 0, 4];

// const getConcatArr = (arr1, arr2, arr3) => {
//     const arrConcat = arr1.concat(arr2, arr3);
//     return getArrDescending(arrConcat).join(' ').split();
// }

// console.log(getConcatArr(arr1, arr2, arr3));

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const arr = [[1, 2, 3], [4, 5], [6]];

// const sumArr = (arr) => {
//     return arr.flat().reduce((accum, current) => accum + current, 0);
// }

// console.log(sumArr(arr));

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = [1, 2, 3, 4, 5, 0];

// const reverseArr = (arr) => {
//     return arr.map((elem, index, arr) => arr[arr.length - 1 - index]);
// }

// console.log(reverseArr(arr));

// 10. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const arr = [5, 1, 3, 4, 6, 9]

// const test = (arr) => {
//     let num = 0;
//     return arr.reduce((accum, current, i) => {
//         if (accum > 10) {
//             num++
//             console.log(accum + current);
//             return accum + current
//         } else {
//             // num++;
//             // console.log(i);
//             // return accum + current
//         }
//     }, 0);
// }

// console.log(test(arr));

// var arr = [1, 2, 3, 0, 4, 5, 6];
// var num = 1;
// var result = arr.reduce(function(sum, elem) {
// 	if (sum > 10) {
// 		console.log(num);
// 		return;
// 	} else {
// 		// num++;
// 		return sum + elem;
// 	}
// });

const arr = [5, 1, 3, 4, 6, 9];
        console.log(arr.reduce((p, c) => p[1] < 10 ? [p[0] + 1, p[1] + c] : p, [0, 0])[0]);


// 11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (value, length) => {
//     const result = [];
//     for (let i = 0; i < length; i++) {
//         result.push(value);
//     };
//     return result;
// }

// console.log(arrayFill("x", 6));
