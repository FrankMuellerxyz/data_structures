function Checking(amount) {
	this.balance = amount;
	this.deposit =  deposit;
	this.withdraw = withdraw;
}

function deposit(amount) {
    if(amount > 0){
	    this.balance += amount;
    }
}

function withdraw(amount) {
    
	if (amount <= this.balance) {
		this.balance -= amount;
	}
	if (amount > this.balance) {
		console.log("Insufficient funds");
	}
}

let account = new Checking(500);
console.log(account.balance);
account.withdraw(100);
console.log(account.balance);
account.deposit(350);
console.log(account.balance);
account.withdraw(800);