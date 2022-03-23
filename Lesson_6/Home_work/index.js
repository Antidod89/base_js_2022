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

// const myString = "lorem ipsum dolor sit amet";

// const capitalize = (str) => {
//     return str.split(" ").map((element) => {
//         return element[0].toUpperCase() + element.slice(1);
//     }).join(" ");
// };

// console.log(capitalize(myString));

// 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const myString = "КаЖдЫй ОхОтНиК";

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

// const myString = "..; 1lore$$$m1! ipsum! 5dolor%% sit;77 amet?";

// const removeChar = (str) => {
//     return str.replace(/[^a-zа-яё0-9\s]/gi, '').trim();
// }

// console.log(removeChar(myString));

// 8. Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// const zeros = (num, len, sign) => {
//     let numberOfZeros = len - num.toString().length;
//     let stringWithZeros = '';
//     for (; numberOfZeros > 0; numberOfZeros--) {
//         stringWithZeros += 0;
//     };
//     if (sign === undefined || sign === '') {
//         return stringWithZeros + num;
//     }
//     return sign + stringWithZeros + num;
//     };

// console.log(zeros(111, 7, "+"));

// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const comparison = (str1, str2) => {
//     return str1.toLowerCase() === str2.toLowerCase();
// };

// console.log(comparison("LoRem", "lOrEm"));

// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const myString1 = "Lorem ipsum dolor sit amet";

// const myString2 = "Dolor";

// const insensitiveSearch = (str1, str2) => {
//     const idIndex = str1.toLowerCase().indexOf(str2.toLowerCase());
//     if (idIndex != -1) {
//         return `Подстрока найдена, индекс - ${idIndex}`;
//     };
//     return "Подстрока не найдена";
// };

// console.log(insensitiveSearch(myString1, myString2));

// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// const myString = "Lorem ipsum dolor sit amet";

// const initCap = (str) => {
//     return str.split(" ").map((element) => {
//         return element[0].toUpperCase() + element.slice(1);
//     }).join("");
// };

// console.log(initCap(myString));

// 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// const myString = "Lorem ipsum dolor sit amet";

// const initSnake = (str) => {
//     return str.split(" ").map((element) => {
//         return element.toLowerCase();
//     }).join("_");
// };

// console.log(initSnake(myString));


// 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// const myString = "Lorem!";

// const repeatStr = (str, n) => {
//     return str.repeat(n);
// };

// console.log(repeatStr(myString, 5));

// 14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// const pathName = "/Lesson_6/Home_work/index.js";

// const path = (pathname) => {
//     return pathname.split("/").pop();
// };

// console.log(path(pathName));

// 15. Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// const myString = "Lorem ipsum dolor sit amet";

// const isStrEndsWithSubstr = (str, str1) => {
//     return str.endsWith(str1);
// };

// console.log(isStrEndsWithSubstr(myString, "et"));

// 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// const myString = "Lorem ipsum - dolor sit amet";

// const getSubstr = (str, char, pos) => {
//     if (pos === "До") {
//         return str.slice(str.indexOf(char) + 1).trim();
//     } else if (pos === "После") {
//         return str.slice(0, str.indexOf(char)).trim();
//     };
//     return str;
// };

// console.log(getSubstr(myString, "-", "До"));

// 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// const myString = "Lorem ipsum dolor sit amet";

// const insert = (str, substr, pos) => {
//     if (pos === undefined || pos === 0) {
//         return substr + str;
//     }
//     const arr = str.split('');
//     arr.splice(pos, 0, substr);
//     return arr.join("");
// };

// console.log(insert(myString, "12345", 6));

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// const myString = "Lorem ipsum dolor sit amet";

// const limitStr = (str, n, symb) => {
//     if (str.length <= n) {
//         return str;
//     } else if (!symb) {
//         return str.substr(0, n) + "...";
//     };
//     return str.substr(0, n) + symb;
// };

// console.log(limitStr(myString, 7, "***"));

// 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// const myString = "Lorem ipsum dolor sit amet";

// const count = (str, stringsearch) => {
//     return str.split(stringsearch).length - 1;
// };

// console.log(count(myString, "o"));

// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// const myString = "     Lorem ipsum     dolor    sit  amet  ";

// const strip = (str) => {
//     const stringToarray = str.split(' ');
//     let newArr = [];
//     for (i = 0; i < stringToarray.length; i++) {
//         if (stringToarray[i] != '') {
//             newArr.push(stringToarray[i]);
//         };
// };
//     return newArr.join(" ");
// };

// console.log(strip(myString));

// 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// const myString = "Lorem ipsum dolor sit amet";

// const cutString = (str, n) => {
//     return str.split(" ").splice(0, n).join(" ");
// };

// console.log(cutString(myString, 3));

// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// const myString = "Lorem ipsum dolor word sit amet";

// const findWord = (word, str) => {
//     return str.indexOf(word) != -1;
// };

// console.log(findWord("word", myString));
