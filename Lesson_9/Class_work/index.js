// const user = {
//     name: "Vasya",
//     age: 20,
// };

// console.log(user);

// const str = new String("строка");

// console.log(str);

// const user = new Object({
//   name: "Vasya",
//   age: 20,
//   sayHi() {
//       console.log("пока");
//   }
// });

// console.log(user);

// const user2 = {
//     name: "Petya",
//     age: 30,
// }

// Object.prototype.sayHi = function () {
//     console.log(`привет ${this.name}`);
// }

// console.log(user);
// console.log(user2);

// user.sayHi()
// user2.sayHi()
// console.log(user);

// const animal = {
//     jumps: "прыжок!"
// }

// const rabbit = {
//     __proto__: animal,
//     jumps: "заяц прыгну!"
// }

// console.log(rabbit.jumps);
// delete rabbit.jumps;

// console.log( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// console.log( rabbit.jumps ); // ? (3)

// Object.prototype.sayHi = function() {
//     console.log(`Hello, I am robot ${this.model}`);
// };

// const robot = {
//     model: "R2D2",
//     creared: 2150,
//     move: function () {
//         console.log(`${this.model} just moved!`);
//     },
// }

// const terminator = {
//     model: "T-800",
//     sayHi: function () {
//         console.log("I will be back");
//     }
// }

// Object.setPrototypeOf(terminator, robot)

// console.log(robot);
// console.log(terminator);

// robot.sayHi()
// terminator.sayHi()

// terminator.move()

// Функции-конструкторы

// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
// }

// CreateUser.prototype.showName = function () {
//     console.log(this.name);
// }

// CreateUser.prototype.showAge = function () {
//     console.log(this.age);
// }

// const userVasya = new CreateUser("Vasya", 20);
// const userPetya = new CreateUser("Petya", 25);

// console.log(userVasya);
// console.log(userPetya);

// userVasya.showName();
// userPetya.showName();

// Практика

// Реализовать функцию конструктор для создания открыток. Функция должна создавать объект открытки со свойствами from, to и метод show(). Метод должен возвращать строку в которой будут указаны значения свойств  from и to.
// Добавить в prototype создаваемого объекта метод заменяющий текущее значение  свойства from на новое переданное значение.

// function CreateCard(from, to) {
//   this.from = from;
//   this.to = to;
//   this.show = function() {
//     console.log(`${this.from}, ${this.to}`);
//   }
// }
// CreateCard.prototype.changeProps = function (newFrom) {
//     this.from = newFrom;
// }
// const newCard = new CreateCard("N. Novgorod", "Moscow");

// console.log(newCard);
// newCard.show(newCard);
// newCard.changeProps("123");
// newCard.show(newCard);

//Классы

// function CreateCard(from, to) {
//       this.from = from;
//       this.to = to;
//     }

// class Animal {
//     constructor(props) {
//         this.name = props.name;
//         this.age = props.age;
//         this.hasTail = props.hasTail;
//     }
// voice () {
//     console.log("I am animal");
// }
// }

// const myAnimal = new Animal({name: "Animal", age: 5, hasTail: true});

// console.log(myAnimal);
// myAnimal.voice()

// class Cat extends Animal {
//     constructor(props) {
//         super(props);
//         this.color = props.color;
//     }
// }

// class BritainCat extends Cat {
//     constructor(props) {
//         super(props);
//         this.breed = props.breed;
//     }
// }

// const myCat = new BritainCat({name:"Cat", age: 8, hasTail: false, color: "grey", breed:"britain"})

// console.log(myCat);

// class Animal {
//     #name = "";
//     static type = "Animal";
//   constructor(props) {
//     this.#name = props.name;
//     this.age = props.age;
//     this.hasTail = props.hasTail;
//   }
//   voice() {
//     console.log("I am animal");
//   }
//   get getName () {
//       console.log(this.#name);
//   }
//   set setName (newName) {
//     this.#name = newName;
// }
// }

// const myAnimal = new Animal({ name: "Animal", age: 5, hasTail: true });

// class Cat extends Animal {
//   constructor(props) {
//     super(props);
//     this.color = props.color;
//   }
// }

// const myCat = new Cat({name:"Cat", age: 8, hasTail: false, color: "grey"});

// myCat.getName
// myCat.setName = "Dog";

// console.log(myCat);

// практика

//Создайте класс People, он должен содержать свойства  name (имя), surname (фамилия) и метод getFullName() (возвращает полное имя человека). Создайте класс Worker который будет наследоваться от класса People. Класс Worker должен содержать свойства name, surname унаследованные от родительского класса, и свойства rate (ставка по которой происходит оплата руб/день), day (количество отработанных дней) и метод getSalary() (возвращает заработную плату сотрудника).
// Создать несколько экземпляров класса Worker с различными данными и проверить корректность работы.

// class People {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//   }
//   getFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// class Worker extends People {
//       constructor(props) {
//         super(props);
//         this.rate = props.rate;
//         this.day = props.day;
//       }
//       getSalary() {
//           console.log(this.rate * this.day);
//       }
//     }

// const employee = new Worker({name:"Maksim", surname: "Makurin", rate: 3000, day: 20});

// console.log(employee);
// employee.getFullName();
// employee.getSalary();

// Пример работы с DOM-деревом

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }
//   hide() {
//     this.$el.style.display = "none";
//   }
//   show() {
//     this.$el.style.display = "block";
//   }
// }

// class Box extends Component {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = this.$el.style.height = options.size + "px";
//     this.$el.style.background = options.color;
//   }
// }

// const box1 = new Box({
//   selector: "#box1",
//   size: 100,
//   color: "red",
// });

// const box2 = new Box({
//   selector: "#box2",
//   size: 80,
//   color: "blue",
// });

// class Circle extends Box {
//   constructor(options) {
//     super(options);
//     this.$el.style.borderRadius = "50%";
//   }
// }

// const myCircle = new Circle({
//   selector: "#circle",
//   size: 70,
//   color: "green",
// });
