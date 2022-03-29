// Практика 1

// Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, в качестве результата возвращать сумму четных положительных элементов переданного массива.

// const arr = [1, 1, 11, -15, 5, -4, 5, -1, 11];

// const getsSumOfPositiveNumbers = (arr) => {
//     let sum = 0;
//     arr.map((elem) => (elem > 0 && elem % 2 === 0) ? sum += +elem : 0);
//     return sum;
// }

// console.log(getsSumOfPositiveNumbers(arr));

// Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного.

// const arr = [1, 2, 1, 10, 15, 5, 1, 5, 2, 10, 6];

// первое решение
// const getArrUniqueValues = (arr) => {
//     return Array.from(new Set(arr));
// }

// console.log(getArrUniqueValues(arr));

// второе решение
const getArrUniqueValues = (arr) => {
    return arr.filter((elem, pos) => {
        return arr.indexOf(elem) === pos;
    });
};

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
//     numbers.reduce((accum, current, index) => {
//         return result[index] = accum + current;
//     }, 0);
//     return result;
// };

// console.log(currentSums(numbers));

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

// const sumSeven = (numbers) => {
//     const reverseArr = numbers.reverse();
//     return numbers
//     .reduce((accum, current, i) => {
//     reverseArr.forEach(item => {
//     item + current === 7 ? accum.push(`(${item}:${current})`) : accum
//     })
//     return accum.slice(0, numbers.length/2)
//     }, [])
//     }

// console.log(sumSeven(numbers));

// 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

// const myString = "lorem ipsum dolor sit amet";

// const getFirstChar = (str) => {
//     return str.split(" ").map((elem) => elem[0]);
// }

// console.log(getFirstChar(myString));

// 5. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

const myString = "LoremIpsum";

const arr = (str) => {
    return str.split('').map((el, i, arr) => (arr[i-1])arr[i-1] + el + arr[i+1]);

}

console.log(arr(myString));