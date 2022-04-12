// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//     this.rate = props.rate;
//     this.days = props.days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const employee = new Worker({
//   name: "Vasya",
//   surname: "Ivanov",
//   rate: 1000,
//   days: 21,
// });

// console.log(employee);
// console.log(employee.getSalary());
// console.log(employee.getFullName());

// 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// class Worker {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//     this.rate = props.rate;
//     this.days = props.days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// class Boss extends Worker {
//   constructor(props) {
//     super(props);
//     this.workers = props.workers;
//   }
//   getSalary() {
//     return this.rate * this.days * this.workers;
//   }
// }

// const employee = new Boss({
//   name: "Petya",
//   surname: "Petrov",
//   rate: 2500,
//   days: 19,
//   workers: 10,
// });

// console.log(employee);
// console.log(employee.getSalary());

// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

// class Worker {
//   #name = "";
//   #surname = "";
//   #rate = 0;
//   #days = 0;
//   constructor(props) {
//     this.#name = props.name;
//     this.#surname = props.surname;
//     this.#rate = props.rate;
//     this.#days = props.days;
//   }
//   getSalary() {
//     return this.#rate * this.#days;
//   }
//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
//   get getName() {
//     return this.#name;
//   }
//   get getSurname() {
//     return this.#surname;
//   }
//   get getRate() {
//     return this.#rate;
//   }
//   get getDays() {
//     return this.#days;
//   }
// }

// const employee = new Worker({
//   name: "Vasya",
//   surname: "Ivanov",
//   rate: 1000,
//   days: 21,
// });

// employee.getName;
// employee.getSurname;
// employee.getRate;
// employee.getDays;

// console.log(employee);
// console.log(employee.getSalary());
// console.log(employee.getFullName());

// 4. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// class Worker {
//   #name = "";
//   #surname = "";
//   #rate = 0;
//   #days = 0;
//   constructor(props) {
//     this.#name = props.name;
//     this.#surname = props.surname;
//     this.#rate = props.rate;
//     this.#days = props.days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
//   get getName() {
//     return this.#name;
//   }
//   get getSurname() {
//     return this.#surname;
//   }
//   get getRate() {
//     return this.#rate;
//   }
//   get getDays() {
//     return this.#days;
//   }
//   set setRate(newRate) {
//     this.#rate = newRate;
//   }
//   set setDays(newDays) {
//     this.#days = newDays;
//   }
// }

// const employee = new Worker({
//   name: "Vasya",
//   surname: "Ivanov",
//   rate: 1000,
//   days: 21,
// });

// employee.setRate = 1500;
// employee.setDays = 15;

// console.log(employee);

// 5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//   constructor() {}
//   reverse(str) {
//     return str.split("").reverse().join("");
//   }
//   ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   ucWords(str) {
//     const result = str.split(" ").map((element) => {
//       return element[0].toUpperCase() + element.slice(1);
//     });
//     return result.join(" ");
//   }
// }

// let string = new MyString();

// console.log(string.reverse("Lorem ipsum dolor sit amet"));
// console.log(string.ucFirst("lorem ipsum dolor sit amet"));
// console.log(string.ucWords("lorem ipsum dolor sit amet"));

// 6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

// class Validator {
//   constructor() {}
//   isEmail(str) {
//     return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(str);
//   }
//   isDomain(str) {
//     return /(\w+\.)+\w+/g.test(str);
//   }
//   isDate(str) {
//     return /^\d{2}[.-/]\d{2}[.-/]\d{4}$/.test(str);
//   }
//   isPhone(str) {
//     return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(str);
//   }
// }

// let validator = new Validator();

// console.log(validator.isEmail("example@gmail.com"));
// console.log(validator.isDomain("example.com"));
// console.log(validator.isDate("12.04.2022"));
// console.log(validator.isPhone("+71234567890"));

// 7. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

class User {
  constructor(props) {
    this.name = props.name;
    this.surname = props.surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
    constructor(props) {
        super(props);
        this.year = props.year;
    }
    getCourse() {
        
    }
}