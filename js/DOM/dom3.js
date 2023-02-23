/*

Завдання 3

Кнопка "Приховати" ховає текст і замінює назву кнопки на

"Розкрити", при повторному натисканні текст знову стає доступним

і кнопка набуває початкового вигляду.

*/

const toggleBtn = document.querySelector("#passwordButton");
const passwordInput = document.querySelector("#passwordInput");

toggleBtn.addEventListener(
  "click",
  toHiddenPassword("Приховати", "Розкрити", "type")
);

// function toHiddenPassword () {
//     const inputeTypeValue = passwordInput.getAttribute('type');
//     if ( inputeTypeValue === "text") {
//         passwordInput.setAttribute('type', 'password');
//         toggleBtn.textContent = "Розкрити";
//     } else {
//          passwordInput.setAttribute("type", "text");
//          toggleBtn.textContent = "Приховати";
//     }
// };

 function toHiddenPassword (closeText, openText, typeOfAttr) {
    return () =>
    {const inputeTypeValue = passwordInput.getAttribute('type');
    if ( inputeTypeValue === "text") {
        passwordInput.setAttribute(typeOfAttr, "password");
        toggleBtn.textContent = openText;
    } else {
         passwordInput.setAttribute(typeOfAttr, "text");
         toggleBtn.textContent = closeText;
    }}
};
