// 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

const timer = () => {
  let secs = 10;
  let timer = setInterval(tcik, 1000);
    function tcik () {
        if (--secs === 5 + 1) {
            clearInterval(timer);
            console.log(--secs);
          }
      }
  
};



timer();

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

// 2. Что выведет функция?
// function f() {
//   alert(this);
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();
// выведет object Window
