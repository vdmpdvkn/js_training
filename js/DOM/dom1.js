/*

Завдання 1

Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

*/
const alertButtonEl = document.querySelector("#alertButton");
const alertInput = document.querySelector("#alertInput");
alertButtonEl.addEventListener("click", () => {
  const output = document.createElement("h1");
  output.textContent = alertInput.value;
  document.body.append(output);
  //   alert(alertInput.value);
});
