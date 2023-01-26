/**
 *? Напиши скрипт, который для объекта user,
 *? последовательно:
 *? 1 добавит поле mood со значением 'happy'
 *? 2 заменит hobby на 'skydiving'
 *? 3 заменит значение premium на false
 *? 4 выводит содержимое объекта users в фортмате
 *? ключ:значение используя Object.keys() и for...of
 */

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`ключ:${key}, значення: ${user[key]}`);
}
// console.log(Object.entries(user));
