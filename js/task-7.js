//Напиши скрипт управления личным кабинетом интернет банка
//Есть объект account в котором необходимо реализовать
//методы для работы с балансом и историей транзакций

//Типов транзакций всего два.
//Можно положить либо снять деньги со счета
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Каждая транзакция это объект со свойствамиЖ id, type, amount

const account = {
  //текущий баланс счёта
  balance: 0,

  //История транзакций
  transactions: [],

  //Метод создает и возвращает объект транзакций
  //Принимает сумму и тип транзакций
  createTransaction() {},

  //Метод отвечающий за добавление суммы к балансу.
  //Принимает сумму транцакции.
  //Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  deposit() {},

  //Метод отвечающий за снятие суммы с баланса.
  //Принимает сумму транцакции.
  //Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  //Если amount больше чем текущий баланс, выводим сообщение о том,
  //что недостаточно средств на счету
  withdraw() {},

  //Метод возвращает текущий баланс
  getBalance() {},

  //Метод ищет и возвращает объект транзакции по id
  getTransactionDetails() {},

  //Метод возвращает количество средств определенного типа
  //транзакции из всей истории транзакций
  getTransactionType() {},
};

// console.log(account.getBalance());
// account.deposit(500);
// account.deposit(300);
// account.deposit(100);
// console.log(account.getBalance());

// console.log(account.withdraw(1000));

// account.withdraw(300);
// account.withdraw(100);
// account.withdraw(150);
// console.log(account.getBalance());

// console.log(account.getTransactionDetails(5));

// console.log(account.getTransactionType(Transaction.DEPOSIT));
// console.log(account.getTransactionType(Transaction.WITHDRAW));
