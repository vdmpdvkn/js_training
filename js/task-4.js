/**
 *? Создайте объект calculator с тремя методами
 *? read(a, b) - принимает два аргумента и сохраняет их
 *? как свойства объекта
 *? sum() возвращает сумму сохраненных значений
 *? multiply() перемножает сохраненные значения и возвращает результат
 */

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
    // return calculator
  },
  sum() {
    if (this.a > 0 && this.b > 0) {
    return this.a + this.b
} else return `enter correct number`
  },
  mult() {
    return this.a*this.b
  },
};

calculator.read(3,3);
console.log(calculator.sum());
console.log(calculator.mult());


