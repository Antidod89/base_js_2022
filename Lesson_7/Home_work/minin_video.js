const  people = [
    { name: 'Владилен', age: 25, burget: 40000 },
    { name: 'Елена', age: 17, burget: 3400 },
    { name: 'Игорь', age: 49, burget: 50000 },
    { name: 'Михаил', age: 15, burget: 1800 },
    { name: 'Василиса', age: 24, burget: 25000 },
    { name: 'Виктория', age: 38, burget: 2300 },
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let person of people) {
//     console.log(person);
// }

// ForEach

// people.forEach(function(person, index, pArr) {
// console.log(person);
// console.log(index);
// console.log(pArr);
// })

// people.forEach(person => console.log(person));

// Map

// const newPeople = people.map(person => {
//     return `${person.name} (${person.age})`
// })

// console.log(newPeople);

// Filter

// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })

// console.log(adults);

// Reduce
// const amount = people.reduce((total, person) => {
//     return total + person.burget
// }, 0)

// console.log(amount);

// Find

// const igor = people.find(person => person.name === "Игорь");

// console.log(igor);

// FindIndex

// const igor = people.findIndex(person => person.name === "Игорь");

// console.log(igor);

//============

// const amount = people
//     .filter(person => person.burget > 3000)
//     .map(person => {
//         return {
//             info: `${person.name} (${person.age})`,
//             burget: Math.sqrt(person.burget)
//         }
//     })
//     .reduce((total, person) => total + person.burget, 0)

// console.log(amount);