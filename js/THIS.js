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

// ---------------------------

/** *? Напиши клас Notes який управляє колекцією нотаток у
 *
 * *? властивості items. *? Нотатка - це об'єкт із властивостями text і priority.
 * *? Додай класу статичний метод Priopity,
 * *? який буде повертати об'єкт із пріоритетами.
 * *? Додай методи addNote(note), removeNote(text)
 * *? updatePriority(text, newPriority)
 * */ // note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
// note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
// note1.updatePriority({ text: "Note2", newPriority: Notes.Priority().HIGHT });
// console.table(note1.items);

class Notes {
  static Priority() {
    return {
      LOW: "low",
      HIGHT: "hight",
    };
  }
  constructor() {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(text) {
    const indexElem = this.items.findIndex((element) => element.text === text);
    this.items.splice(indexElem, 1);
  }
  updatePriority(text, newPriority) {
    const indexElem = this.items.findIndex((element) => element.text === text);
    this.items[indexElem].priority = newPriority;
  };
}

const note1 = new Notes();
note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note3", priority: Notes.Priority().LOW });
note1.removeNote('Note2');
note1.updatePriority("Note1", Notes.Priority().HIGHT);
console.log(note1);