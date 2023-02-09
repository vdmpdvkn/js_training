console.log("hello");
/**
*? Напиши функцію конструктор User для 
*? створення користувача з такими властивостями:
*? a. userName - ім'я, рядок
*? b. age - вік, число
*? c. numbersOfPost - кількість постів, число
*? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

*? Додай метод getInfo(), який повертає рядок:
*? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`

 */

// function User(options) {
//   const { name, age, postCount } = options;
//   this.name = name;
//   this.age = age;
//   this.postCount = postCount;
// }
// User.prototype.getInfo = function () {
//   return `Користувачеві ${this.name} ${this.age} років і в нього ${this.postCount} публікацій.`;
// };

// const lena = new User({ name: "Lena", age: 25, postCount: 11 });

// console.log(lena);
// console.log(lena.getInfo());


/**
 *? Напиши функцію конструктор Storage який створює об'єкти
 *? Для управління складом товарів.
 *? При виклику отримуватиме один агрумент - початковий масив товарів,
 *? і записувати їх у властивість items.
 *? Додай методи класу:
 *? getItems() - повертайте масив товарів
 *? addItems(item) - отримує новий товар та додає його до поточних
 *? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
 */

//  class Storage{
//     constructor(items){
//         this.items = items;
//     }

//     getItems(){
//         return this.items;
//     }

//     addItems(item){
//         this.items.push(item)
//     }
//     removeItem(item){
//         this.items = this.items.filter(newItem => newItem !== item)
//     }

//  }
//  const storage = new Storage(["add", "newAdd", "endAdd"])
//  console.log(storage.getItems());

//  storage.removeItem("add");
//  console.log(storage.getItems());
