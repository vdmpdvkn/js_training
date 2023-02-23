// function fibonacci(n) {
//   let a = 0;
//   let b = 1;
//   const arrFib = [0];
//   do {
//     let fib = a + b;
//     b = a;
//     a = fib;
//     arrFib.push(fib);
//   } while (arrFib.length <= n);
//   return arrFib;
// }
// console.log(fibonacci(8));
// console.log(fibonacci(140));

// const recurseFibonacci = (n) => {
//   if (n <= 1) {
//     return [0, 1];
//   } else {
//     let fib = recurseFibonacci(n - 1);
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     return fib;
//   }
// };
// console.log(recurseFibonacci(7835));
