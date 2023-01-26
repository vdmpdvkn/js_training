/**
 *? У нас есть объект, в котором хранятся зарплаты
 *? нашей команды
 *? Напишите код для суммирования всех зарплат и
 *? сохраните его результат в переменной sum.
 *? Если объект salaries пуст, то результат должен быть 0
 */

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

function culcSalar()
{
  let sum = 0;
  let salaryUser = Object.values(salaries);

  for (const value of salaryUser){
    // console.log(value)
    sum = sum + value;
  }
  console.log(sum)
}
culcSalar()