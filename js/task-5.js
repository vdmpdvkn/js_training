/**
 *? Напишите функцию updateObject, которая принимает объект и возвращает
 *? новый объект без указанного параметра
 *? Ожидаемый результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1}
 *? https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
 */

// const obj = { a: 1, b: 2, c: 3 };

// function updateObject (object, removeKey) {
//  const newObject = {...object }
//  delete newObject[removeKey];
//     return newObject;
// }
// console.log(updateObject(obj, "c"));

/**
 *? Напишите функцию updateObject, которая принимает объект и возвращает
 *? новый объект без указанных параметров
 *? Ожидаемый результат updateObject({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
 */

 const obj = { a: 1, b: 2, c: 3 };

function updateObject (object,  ...removeKeys){
 
    const newObject = {...object}
    for (const key of removeKeys){
        delete newObject[key]
    }

    
    return newObject;
}
 console.log (updateObject(obj, "a", "b" ))
