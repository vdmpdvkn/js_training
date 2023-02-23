// Завдання 2

// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.

// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// */
const ref = {
  inputFirstEl: document.querySelector("#leftSwapInput"),
  inputSecondEl: document.querySelector("#rightSwapInput"),
  buttonEl: document.querySelector("#swapButton"),
};

ref.buttonEl.addEventListener("click", () => {
  const firstInputValue = ref.inputFirstEl.value;
  const secondInputValue = ref.inputSecondEl.value;
  ref.inputFirstEl.value = secondInputValue;
  ref.inputSecondEl.value = firstInputValue;
});
