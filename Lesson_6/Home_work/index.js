// 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// const myString = "Lorem ipsum dolor sit amet";

// const stringToarray = (str) => {
//     return str.split(" ");
// };

// console.log(stringToarray(myString));

// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const myString = "Lorem ipsum dolor sit amet";

// const deleteСharacters = (str, length) => {
//     if (typeof str != "string" || str.length <= 0) {
//         return "Пустая строка или не является строкой";
//     };
//     return str.slice(0, length)
// };

// console.log(deleteСharacters(myString, 11));

// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const myString = "Lorem ipsum dolor sit amet";

// const insertDash = (str) => {
//     if (typeof str != "string" || str.length <= 0) {
//         return "Пустая строка или не является строкой";
//     };
//     return str.toUpperCase().replace(/\s/g, '-');
// };

// console.log(insertDash(myString));

// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const myString = "lorem ipsum dolor sit amet";

// const firstSymbolToUpperCase = (str) => {
//     if (typeof str != "string" || str.length <= 0) {
//         return "Пустая строка или не является строкой";
//     };
//     return str[0].toUpperCase() + str.slice(1);
// };

// console.log(firstSymbolToUpperCase(myString));

// 5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// первое решение
// const myString = "lorem ipsum dolor sit amet";

// const capitalize = (str) => {
//     return str.split(" ").map((element) => {
//         return element[0].toUpperCase() + element.slice(1);
//     }).join(" ");
// };

// console.log(capitalize(myString));

// второе решение

// const capitalize = (str) => {
//     return str.replace(/(^|\s)\S/g, (value) => {
//         return value.toUpperCase()
//     });
// };

// console.log(capitalize(myString));

// 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const myString = "КаЖдЫй ОхОтНиК";

// первое решение

// const changeRegister = (str) => {
//     let upperCase = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         if (upperCase.includes(str[i])) {
//             result.push(str[i].toLowerCase());
//         } else {
//             result.push(str[i].toUpperCase());
//         };
//     };
//     return result.join("");
// };

// console.log(changeRegister(myString));

// второе решение
// const changeRegister = (str) => {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             result.push(str[i].toLowerCase());
//         } else {
//             result.push(str[i].toUpperCase());
//         };
//     };
//     return result.join("");
// }

// console.log(changeRegister(myString));

// 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const myString = "11. lorem1! ipsum! dolor%% sit; amet?";

// const removeChar = (str) => {
//     return str.replace(/[^a-zа-яё\s]/gi, '').trim();
// }

// console.log(removeChar(myString));

// 8. Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

const zeros = (num, len, sign) => {
    let numberOfZeros = len - num.toString().length;
    console.log(numberOfZeros);
    let stringWithZeros = '';
      for (; numberOfZeros > 0; numberOfZeros--) {
        stringWithZeros += 0;
      }
      return (sign === undefined || sign === '') ? stringWithZeros + num + '' : sign + stringWithZeros + num +'';
    };

console.log(zeros(111, 7, "-"));
