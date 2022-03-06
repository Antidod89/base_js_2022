// const myVar1 = 5;
// const myVar2 = 10;

// if (myVar1 > myVar2) {
//     console.log(`${myVar1} больше ${myVar2}`);
// } else if (myVar1 < myVar2) {
//     console.log(`${myVar1} меньше ${myVar2}`);
// } else {
//     console.log("end")
// }

// let result = myVar1 > myVar2 ? console.log(true) : console.log(false); //тернарный оператор

//конструкция Switch

// const userRole = 'admin';

// switch(userRole) {
//     case 'student':
//         console.log("Текущий пользователь - student");
//         break;
//     case 'admin':
//         console.log("Текущий пользователь - admin");
//         break;
//     case 'normal_user':
//         console.log("Текущий пользователь - normal_user");
//         break;
//         default:
//             console.log("Нет такого типа пользователя");
//         break;
// }

// логические оператора
// && - логическое И - возвращает первое значение FALSE
//|| - логическое ИЛИ - возвращает первое значение TRUE
// ! логическое НЕ

// console.log(1 || 0 || 4);
// console.log(1 && 2 && 'строка' && 0 && 1);

// console.log((1 && 2) || (4 && 0));

// что делает js пошагово
// if (1 && 0) {
//     console.log(result);
// }
// 1. находит ключевое слово IFб, понимает, что дальше - условие
// 2. внтури условия находит логическое И - &&
// 3. оператор приводит значение к булеву типу - true/false, делает эо под капотом
// 4. 1-> true, 0 -> false, возвращает ЗНАЧЕНИЕ, которое является false при приведение в булев тип
// 5. В данном случае получам 0, которое приводиться в булев тип блоком IF

// логическое НЕ
// 1. JS приводит значение после ! к булеву типу
// 2. ! меняет полученный тип на противоложный

// const myVar = 5;

// if (!!myVar) {
//     console.log("TRUE");
// }

// console.log(null || 0 || "" || undefined);
// console.log("яблоко" && true && null && 1);
// console.log(0 || (true && "false") || null);
// console.log(0 && true || "false" && null);
// console.log(!0 && !!1);
// console.log(!(null || (!"апельсин" && true)));

//1
// const intervalOne = 5;
// const intrevalTwo = 8;
// const intervalThee = 18;

// if (intervalOne > intrevalTwo && intervalOne > intervalThee) {
//     console.log(`${intervalOne} - самый большой отрезок`);
// } else if (intrevalTwo > intervalOne && intrevalTwo > intervalThee) {
//     console.log(`${intrevalTwo}`);
// } else if (intervalThee > intervalOne && intervalThee > intrevalTwo) {
//     console.log(`${intervalThee}`);
// }




// //2
// const currentTmp = 25;

// if (currentTmp <= -30) {
//     console.log("Оставайтесь дома");
// } else if (currentTmp > -30 && currentTmp <= -10) {
//     console.log("сегодня холодно");
// } else if (currentTmp > -10 && currentTmp <= 5) {
//     console.log("Не холодно");
// } else if (currentTmp > 5 && currentTmp <= 15) {
//     console.log("Тепло");
// } else if (currentTmp > 15 && currentTmp <= 25) {
//     console.log("Очент тепло");
// } else if (currentTmp >25 && currentTmp <= 35) {
//     console.log("Жарко");
// } else {
//     console.log("Нет рекомендаци о погоде");
// }

//циклы

//WHILE / DO WHILE

// let counter = 0;
// while (counter >= 0 && counter <= 10) {
//     console.log(counter +=1); //counter = v +1
// }

// do {
//     console.log(counter += 1);
// } while (counter >= 0 && counter <= 10)

//FOR

// const endOfLoop = 10;
// for (let counter = 0; counter <= endOfLoop; counter++) {
//     console.log(counter);
//     if (counter === 5) {
//         break;
//     }
// }

//1. while, do-while, for
//while
// const myString = 'string';
// let i = 0;
// let n = 15;
// while (i >= 0 && i < n) {
//     console.log();
// }
// do-while
// do {

// }


// 1. вывести в консоль строку N раз

// const iterationText = "Итерация";

// //while
// const limit = 5;
// let counter = 1;

// while (counter <= limit) {
//     console.log (`${iterationText} - ${counter}`);
//     counter++;
// }
// //do

// do {
//     console.log (`${iterationText} - ${counter}`);
//     counter++;
// } while (counter <= limit);

// //for
// for (let counter =1; counter <= limit; counter++) {
//     console.log(`${iterationText} - ${counter}`);
// }
// //2. автомобили

// let carsAmount = 60;//N
// const minCarsAmount = 10;//M

// for (let day = 1; carsAmount > minCarsAmount; day++) {
//     carsAmount /=2;

//     if (carsAmount < minCarsAmount) {
//         console.log(`На ${day} день`);
//     }
// }

//3. высокосный год

const startYear = 1800;
const endYear = 2020;

let laepYearsAmount = 0;
// const firstSpaceTripYear = 1961;

// for (let counter = startYear; counter <=endYear; counter++) {
//     if (counter === firstSpaceTripYear) {
//         console.log(`${firstSpaceTripYear} "первый полет в космос"`);
//         console.log(`Количество итераций - ${counter - startYear}`);
//         break;
//     }
// }

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(year);
        laepYearsAmount += 1;
    }
    if (year === endYear) {
        console.log(`Количество высокосных лет ${laepYearsAmount}`);
        console.log(`количество итераций ${year - startYear}`);
    }
}

