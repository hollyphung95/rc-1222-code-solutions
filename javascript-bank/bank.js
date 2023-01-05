/* exported Bank */
class Bank {
  constructor() {
    this.nextAccountNumber = 1;
    this.accounts = [];
  }

  /* If the value of balance is not a positive integer, then the method returns null. */
  /* Otherwise, it returns the number property of the created account. */
  openAccount(holder, balance) {
    if (balance < 0) {
      return null;
    } else {
      this.accounts.push(this.holder, this.balance);
      return holder.number;
    }
  }

  /* The matching account object. */
  /* If the bank does not have an account that matches the provided number, then null is returned.. */
  getAccount(number) {
    if (this.number) {
      return this.Account.number;
    } else {
      return this.number;
    }
  }

  /* A prototype method of the Bank constructor that
  calculates the grand total of all balances of all accounts in the bank. */

  /* A number that is the grand total of all of the bank's account balances.
  If there are no accounts in the bank, then 0 is returned.
  Otherwise, a positive or negative integer is returned.
  The accounts within the bank should remain unchanged. */
  getTotalAssets() {
    return 0;
  }

}
