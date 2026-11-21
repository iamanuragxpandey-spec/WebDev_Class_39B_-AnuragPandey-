const validateWithdrawal = (amount, balance) => {
    if (amount > balance) {
        return false;
    }

    if (amount % 500 !== 0) {
        return false;
    }

    return true;
};

const withdrawMoney = (amount, balance, callback) => {
    let isValid = callback(amount, balance);

    if (isValid) {
        let fee = 25;
        let remainingBalance = balance - amount - fee;

        console.log("Account Balance : Rs.", balance);
        console.log("Withdrawal Amount : Rs.", amount);
        console.log("Withdrawal Successful!");
        console.log("Transaction Fee : Rs.", fee);
        console.log("Remaining Balance : Rs.", remainingBalance);
    } else {
        console.log("Withdrawal Failed!");
        console.log("Invalid Amount or Insufficient Balance.");
        console.log("Current Balance : Rs.", balance);
    }
};

withdrawMoney(3000, 10000, validateWithdrawal);