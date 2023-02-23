/*

Завдання 4

Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.

*/
const boxEl = document.querySelector("#box");
const decreaseBtnEl = document.querySelector("#decrease");

const increaseBtnEl = document.querySelector("#increase");

let counter = parseInt(getComputedStyle(boxEl).height);

increaseBtnEl.addEventListener("click", increaseBox);
decreaseBtnEl.addEventListener("click", decreaseBox);

function decreaseBox() {
  counter -= 10;
  boxEl.style.width = counter + "px";
  boxEl.style.height = counter + "px";
}
function increaseBox() {
  counter += 10;
  boxEl.style.width = counter + "px";
  boxEl.style.height = counter + "px";
}
// getComputedStyle
