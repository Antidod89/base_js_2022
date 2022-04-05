// 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// const timer = (start, end) => {
//   // let secs = 10;
//   const timer = setInterval(tcik, 1000);
//   function tcik() {
//     --start;
//     if (start === end) {
//       clearInterval(timer);
//       console.log(`Работа таймера завершена на ${start} сек.`);
//     }
//   }
// };

// timer(10, 5);
// (function loops(){
//   let sec = 10;
//   setTimeout(function(){

//     --sec;
//     console.log(sec);
//     loops();
//       if (sec !=9) {
//       console.log(sec);
//       // loops(); // рекурсия
//       }
//       // --sec;
//       // console.log(--sec);
//       // loops(); // рекурсия
//   }, 1000);
// })();



// function updatePLEASE() {
//   timer--;
// }
// const test1 = () => {
//   let timer = 60;
//   let hhh = function countDownTimer() {
//     --timer;
//     if (timer > 57) {
//       console.log(end);
//       // document.getElementById("myTimer").innerHTML = timer;
//       // updatePLEASE();
//       setTimeout(countDownTimer, 1000,); /* replicate wait 1 second */
//     } else {
//       console.log(`Работа таймера завершена на ${timer} сек.`);
//     }
//   }
//   return hhh
// }

// test1()

// test1()
let timer = 60;

function countDownTimer() {
    --timer;

  
  console.log(timer);
  if (timer > 57) {
    console.log(timer);
    // document.getElementById("myTimer").innerHTML = timer;
    // updatePLEASE();
    setTimeout(countDownTimer, 1000,); /* replicate wait 1 second */
  } else {
    console.log(`Работа таймера завершена на ${timer} сек.`);
  }
}
countDownTimer(timer);

// var target = 60; // 25 mins
// var current = 0; // 0 secs
// function countdown(start) {
//     current += 1;
//     var diff = start-current;           // calculates the 25 minutes
//     var min = Math.floor(diff/1000/60);  //gets mins
//     var sec = (diff/1000) % 60;          // gets secs

//     console.log(diff);
//     if (diff > 57)
//         setTimeout(countdown, 1000);

// }

// countdown(target);


// setTimeout(timer, 1000, "Привет", "Джон");

// const func = () => {
//     console.log('Hello after 4 seconds');
//   };
//   setTimeout(func, 4 * 100);

// function showTime(time) {
//     // console.log("object");
//   }
//   let startTime = 1;
//   setInterval(() => {
//     showTime((startTime -= 1000));
//     console.log(startTime -= 1000);
//   }, 1000);
// let secs = 10;
// let timer = setInterval(tick, 1000);
// function tick() {
//   // const secs = 10;
//   // let secs = 10;
//   // let timer = setInterval(tick,1000)
//   if (--secs === 5) {
//     clearInterval(timer);
//     console.log(--secs);
//   }
//   // console.log('Осталось '+(--secs)+' секунд');
// }
// tick();

// function recursiveSetTimeout(iterations, end) {
//   return new Promise((resolve, reject) => {
//     function repeat(count) {
//      if (count === end) return resolve(console.log(`${count} "finished"`))
//       console.log(count)
//       setTimeout(repeat.bind(null, count-1), 1000)
//     }
//     repeat(iterations)
//   })
// }
// recursiveSetTimeout(60, 57)
// recursiveSetTimeout(60, 57).then((result)=>{console.log(result)})

// 2. Что выведет функция?
// function f() {
//   alert(this);
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();
// выведет object Window

// function calcNodes(n, result) {
//   if (result.max < n.value) {
//       result.max = n.value;
//   }
//   if (result.min > n.value) {
//       result.min = n.value;
//   }
//   result.avg = (result.sum += n.value) / ++result.count;
//   if (n.children) {
//       n.children.forEach(function (item) {
//           calcNodes(item, result);
//       })
//   }
//   return result;
// }
