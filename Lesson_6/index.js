// const goToThePlace = (place) => {
//     console.log(`иду в ${place}`);
// }

// const user = {
//     name: "Ivan",
//     age: 18,
//     goToUniversity: () => goToThePlace("универ"),
// };
// user.goToUniversity();

// const nameKey = 'name';
// const user = {
//     [nameKey]: "Ivan",
//     age: 18,
// };

// console.log(user["age"]);
// console.log(user);

// const user = {
//         name: "Ivan",
//         age: 18,
// };

// user.name = "Petya";

// delete user.age;

// console.log(user);

// Практика 

// Создайте объект myFavoriteFilm, описывающий ваш любимый фильм. Объект должен содержать свойства с названием фильма, с датой выпуска, именем режиссера и страной выпуска. 
// Добавить свойство содержащее значение выручки фильма в прокате.
// Добавить метод, который который будет выводить название фильма в консоль.
// Удалить свойство содержащее год выпуска.
// Вывести в консоль объект myFavoriteFilm и проанализировать его структуру.

// const myFavoriteFilm = {
//     title: "Хранители",
//     date: 2009,
//     director: "Зак Снайдер",
//     country: "США"
// };

// myFavoriteFilm.rise = 10000000;
// console.log(myFavoriteFilm.title);
// delete myFavoriteFilm.date;
// console.log(myFavoriteFilm);

// const myFavoriteFilm = {
//         title: "Pulp Fiction",
//         releaseYear: 1995,
//         director: "Tarantino",
//         country: "USA",
// };

// myFavoriteFilm.income = 100000;
// delete myFavoriteFilm.releaseYear;
// myFavoriteFilm.showName = () => console.log(myFavoriteFilm.title);
// myFavoriteFilm.showName ();
// console.log(myFavoriteFilm);

// const myNumber = 10.12123;

// console.log(myNumber.toFixed(2));

// const myNumber = 2.3e4;

// console.log(myNumber);

//parseInt для целых чисел
//parsefloat для дорбных чисел

// console.log(parseInt("1e23"));
// console.log(parseFloat("12.2434e332"));
// console.log(parseInt("123", 8));

// const myNumber = "a123";

// if (typeof myNumber === "number") console.log("число");
// if (!isNaN(myNumber)) console.log("число");

// console.log(isFinite(10 / 2));

// const myNumber = 123;

// console.log(Math.ceil(myNumber)); // ceil - округление в большую сторону
// console.log(Math.floor(myNumber)); // floor - округление в меньшую сторону

// console.log(Math.random());

// const myString = "\"привет \nвсем\"";
// console.log(myString);

// const myName = "    Vasya";

// console.log(myName.trim()); // схлопывает пробелы по краям строки
// const myString = "Widget with id";

// const idIndex = myString.indexOf("id", 2);

// const newString = myString.slice(idIndex)

// console.log(newString);

// Практика 

// Реализовать функцию которая будет принимать числовой диапазон в качестве параметров [min, max] и будет возвращать случайное целое число из данного диапазона.

// const getRandomNumber = (min, max) => {
//     let rand = min + Math.random() * (max - min + 1);
//     return Math.floor(rand);
// }

// console.log(getRandomNumber(1, 10));

// const myFunk = (min, max) => {
//     const result = Math.random() * (max - min) + min;
//     return result.toFixed();
// };

// console.log(myFunk(1,20));

// Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.

// const myStr = "строка";

// const isCharBig = (str, pos) => {
//     if (!str[pos]) {
//         return "Ошибка";
//     }
//     if (str[pos] === str[pos].toUpperCase()) {
//         return "Заглавная";
//     }
//     return "Не заглавная";
// }

// console.log(isCharBig(myStr, 2));

//Реализовать функцию которая заменяет в строке str, все вхождения подстроки find, на подстроку replace.

// const myConst = "dfsdfdsfs d  ds f  word saasd word dsfds";

// const replaceFunc = (str, find, raplce) => {
//     return str.replaceAll(find, raplce) 
// };
// console.log(replaceFunc(myConst, "word", "nnnn"));