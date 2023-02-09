//Напиши скрипт управления личным кабинетом интернет банка
//Есть объект account в котором необходимо реализовать
//методы для работы с балансом и историей транзакций

//Типов транзакций всего два.
//Можно положить либо снять деньги со счета
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


//Каждая транзакция это объект со свойствамиЖ id, type, amount

const account = {
  //текущий баланс счёта
  balance: 0,

  //История транзакций
  transactions: [],

  //Метод создает и возвращает объект транзакций
  //Принимает сумму и тип транзакций
  createTransaction(amount, type) {
    return {
        amount,
        type,
        id: this.generateId()
    };
},
  //Метод отвечающий за добавление суммы к балансу.
  //Принимает сумму транцакции.
  //Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.addToHistory(transaction);
    this.balance += amount;
},
  //Метод отвечающий за снятие суммы с баланса.
  //Принимает сумму транцакции.
  //Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  //Если amount больше чем текущий баланс, выводим сообщение о том,
  //что недостаточно средств на счету
  withdraw(amount) {
    if (amount > this.balance) {
        this.displayError('Недостаточно средств!');
        return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.addToHistory(transaction);
    this.balance -= amount;
},
  //Метод возвращает текущий баланс
  getBalance() {
    return this.balance;
  },
  //Метод ищет и возвращает объект транзакции по id
  getTransactionTotal(type) {
    let result = 0;
    for (const row of this.transactions) {
      result += row.type === type ? row.amount : 0;
    }
    return result;
  },
  //Метод возвращает количество средств определенного типа
  //транзакции из всей истории транзакций
  getTransactionTotal(type) {
    let result = 0;
    for (const row of this.transactions) {
      result += row.type === type ? row.amount : 0;
    }
    return result;
  },

// --  +  из урока    -----------------

  /*
   * Метод додает транзакцию до истории
   */
  addToHistory(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод додает Id до истории
   */
  generateId() {
    return this.currentId + 1;
  },

  displayError(message) {
    console.log(message);
  },
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




account.deposit(500);
console.log(1);
account.withdraw(250);
console.log(2);
account.withdraw(1000);
console.log(3);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.getTransactionDetails(1));