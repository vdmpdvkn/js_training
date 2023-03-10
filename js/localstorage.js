/**
 *
 * *Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
 * *у локальне сховище і змінюй кнопку login на logout і роби поля введення
 * *недоступними для зміни.
 *
 * *Якщо введені дані не збігаються з потрібними даними, викликати аlert і
 * *повідомляти про помилку.
 *
 * *При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
 * *та недоступні для зміни поля з даними користувача.
 *
 * *Клік по кнопці logout повертає все в початковий вигляд та видаляє дані користувача
 * *З локального сховища.
 *
 */

const SAVED_LOGIN_DATA = "SAVED_LOGIN_DATA";
const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};

const formEl = document.querySelector("#login-form");
const { email, password, button } = formEl.elements;

formEl.addEventListener("submit", validateAcc);
autoLogin();
button.addEventListener("click", logOutOnClick);

function validateAcc(evt) {
  evt.preventDefault();
  const { email, password, button } = evt.currentTarget.elements;
  if (
    email.value.trim() === USER_DATA.email &&
    password.value.trim() === USER_DATA.password
  ) {
    const enteredData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    localStorage.setItem("enteredData", JSON.stringify(enteredData));
    disableFields();
  }
}
function autoLogin() {
  const loginData = JSON.parse(localStorage.getItem("enteredData"));
  if (loginData) {
    email.value = loginData.email;
    password.value = loginData.password;
    disableFields();
  }
}
function disableFields() {
  button.textContent = "Log Out";

  email.disabled = "true";
  password.disabled = "true";
}
function logOutOnClick() {
  if (button.textContent === "Log Out") {
    localStorage.removeItem("enteredData");
    button.textContent = "Log In";
    formEl.reset();
    email.removeAttribute("disabled");
    password.removeAttribute("disabled");
  }
}
