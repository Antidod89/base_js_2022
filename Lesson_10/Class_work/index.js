// console.log(document.head);

// навигация по элементам

// const block2 = document.querySelector(".block2")
// const block2 = document.querySelector("div")
// const block2 = document.querySelector("#block2")
// const block2 = document.querySelector(".block2 .paragrph-2")


// console.log(block2.parentElement);
// console.log(block2.previousElementSibling);
// console.log(block2.nextElementSibling);
// console.log(block2.firstElementChild);
// console.log(block2.lastElementChild);

// Поиск элементов в DOM

// const block2 = document.querySelector(".block2")
// const block2 = document.querySelector("div")
// const block2 = document.querySelector("#block2")
// const block2 = document.querySelector(".block2 .paragrph-2")

// console.log(document.getElementById("block1"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.querySelectorAll("div"));
// const link = document.querySelector("a");
// const input = document.querySelector("input");

// console.log(link);
// console.log(input);

// console.log(document.body.innerHTML += "123");
// console.log(document.body);

// console.log(document.body.innerText);

// const block1 = document.querySelector("#block1");

// console.log(block1.outerHTML);

// работа со стилями

// const block1 = document.querySelector("#block1");

// block1.style.backgroundCollor = "grey"
// block1.className = "div-block";
// block1.classList.add("block")
// block1.classList.remove("block")

// console.log(block1.classList);

// создание элеиента
// document.body.style.margin = "0";
// const header = document.createElement("header");
// header.className = "page-header";
// header.style.background = "yellow"
// header.style.height = "60px"
// header.style.display = "flex";
// header.style.justifyContent = "center";
// header.style.alignItems = "center";
// header.innerHTML = "Это шапка сайта";
// document.body.prepend(header)

// console.log(header);

// Практика 

// Создание To Do List, необходимо средствами JS создать страницу на которой будут элементы:
// header содержащий заголовок страницы
// контейнер с контентом страницы
// поле ввода input
// список элементов (число элементов > 1)
// кнопка добавления To Do

// ***
// const header = document.createElement("header");
// header.innerHTML = "To Do List";
// document.body.prepend(header);
// const body = document.createElement("div");
// document.body.prepend(body);
// const input = document.createElement("input");
// document.body.prepend(input);
// ***


// document.body.style.margin = "0";
// const header = document.createElement("header");
// header.className = "page-header";
// header.style.background = "yellow"
// header.style.height = "60px"
// header.style.display = "flex";
// header.style.justifyContent = "center";
// header.style.alignItems = "center";
// header.innerHTML = "Это шапка сайта";
// document.body.prepend(header)

// section
// const section = document.createElement("section");
// section.className = "page-section";
// header.after(section)

// input

// const input = document.createElement('input');
// input.className = "todos-input"
// input.addEventListener("input", (event) => console.log(event.target.value))

// section.prepend(input)

// button
// const button = document.createElement("button");
// button.classList = "todos-button";
// button.innerText = "add Todo"
// // button.onclick = () => console.log("clicked");
// button.addEventListener("click", handleToDoAdd);
// // button.addEventListener("click", () => console.log("clicked clecked"))
// input.after(button)

// todos-list

// const newUl = document.createElement("ul");
// newUl.className = "todos-list";
// button.after(newUl)

// todos item

// for (let i = 1; i <= 5; i++) {
//     const newLi = document.createElement("li");
//     newLi.className = "todos-list__item";
//     newLi.innerText = `пункт ${i}`;
//     newUl.append(newLi)
// }

// function handleToDoAdd() {
//     const currentInputValue = input.value;
//     const todoListLength = document.querySelectorAll('li').length;
//     const newLi = document.createElement('li');
//     newLi.className = "todos-list__item";
//     newLi.innerText = `${currentInputValue} ${todoListLength + 1}`;
//     newUl.append(newLi)
// }

//stopPropogation / stopImmediatePropagation
//event.preventDefault()

// const a = document.querySelector("a");
// a.innerText = "ссылка";
// a.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log("clicked");
// })

// console.log(a);



