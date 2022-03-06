// Примитивные типы данных:

// number

console.log(1 / 0);
// NaN это число
console.log(typeof NaN); // NaN = Not a Number (не число), но тип = число

// оператор typeof показывает тип данных

// String

const myString = "строка";
const anotherString = "текст: \"текст\" 'текст'";
const templateString = `шаблонная строка ${anotherString}`;
console.log(templateString);
console.log(anotherString);
console.log(myString);

// Boolean
const isAdmin = true;
const isUser = false;

// Null

const emptyVariable = null;

// undefined
// const userName;
// console.log(userName)

// Непримитивные типы данных:

// Object

const user = {
  name: "Maksim",
  lastName: "Makurin",
  age: 33,
  citixenship: "Russia",
};

console.log(user.name);

// typeof оператор
// typeof null - всегда объект. Ошибка JS

console.log(typeof null);

// преобразование типов данных
// строковое преобразование
const myVar1 = true;

const myVarToString = String(myVar1);
console.log(typeof myVarToString);

// численное преобразование

const myVar2 = "qwe123";

const myVarToNumber = +myVar2;
console.log(myVarToNumber);
console.log(typeof myVarToNumber);

// логичиские преобразования

const myVar3 = 1;
console.log(Boolean(myVar3));
console.log(!!myVar3);
console.log(!myVar3);

// математические операторы

const myNumber = 1;
const newnumber = 2;
const myStringNew = "строка";

console.log(myNumber + myString);

// сравнение строк

const string1 = "строка";
const string2 = "солнце";
console.log(string1 == string2);

//unicode

const userTypes = {
  admin: "admin",
  user: "user",
  teacher: "teacher",
  contentManager: "contentManager",
};

const serverDataUserType = "user";

if (serverDataUserType === userTypes.admin) {
  console.log("Показать весь контент");
} else {
  console.log("показать ограниченный контент");
}

const myNumber1 = 1;
const myString1 = "1";

console.log(myNumber1 === myString1);

// практика

console.log(5 > 4);
console.log("ананас" > "яблоко");
console.log("2" > "12");
console.log(undefined == null);
console.log(null == "\n0\n");
console.log(null === +"\n0\n");
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);