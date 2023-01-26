/**
 *? Напишите функцию, которая принимает как параметр объект
 *? и формирует объекты в новом массиве в формате [key, value]
 *? https://question-it.com/questions/245501/kak-razbit-obekt-js-na-massiv-par-kljuch-znachenie
 */

const user = {
  name: "John",
  surName: "Stones",
  age: 20,
  hobby: "tennis",
  haveCar: true,
  married: false,
};


const user = {
  name: "John",
  surName: "Stones",
  age: 20,
  hobby: "tennis",
  haveCar: true,
  married: false,
};

// function arrayFromObject(obj) {
//   return Object.entries(obj);
//   }
  
//   console.log(arrayFromObject(user));
  
  //or
  
  function arrayFromObject(obj) {
  const result = [];
  for (const key in obj) {
  result.push([key, obj[key]]);
  }
  return result;
  }
  console.log(arrayFromObject(user));