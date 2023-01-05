/* exported Account */

class Account {

  constructor(number, holder) {
    this.name = 'Account';
    this.number = number;
    this.holder = holder;
    this.transactions = [];
    this.deposits = [];
    this.withdraws = [];
  }

  getBalance() {
    if (this.transactions.length === 0) {
      return 0;
    }
    return this.amount;
  }

  deposit(amount) {
    var returnValue = parseInt(this.amount);

    if (returnValue > 0) {
      return true;
    } else {
      return false;
    }
  }

  withdraw(amount) {
    if (this.amount > 0) {
      this.transactions.push(['withdraw', amount]);
      return this.Transaction('withdraw', this.amount);
    } else {
      return false;
    }
  }

}
