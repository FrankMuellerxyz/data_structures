# The Javascript Programming Environment and Model

## if else statement

 ```
 let mid = 25;
 let high = 50;
 let low = 1;
 let current = 13;
 let found -1;
 if(current < mid) {
 	mid = (current-low) / 2;
 }
 else if {
 	mid = (current+high) / 2;
}
else {
	found = current;
}
```

##  the switch statement

```
putstr("Enter a month number: ");
let monthNum = readline();
let monthName;
switch (monthNum) {
	case "1":
		monthName = "January";
		break;
	case "2":
                monthName = "January";
		break;
	case "3":
 		monthName = "January";
 		break;
// etc. for the rest of the months
	default:
		print("Bad input");
}
```

## functions/methods
A defined procedure that can contain parameters as input and a return statement defined as the output.

## scopes

There are global and local scopes
- global scopes can be accessed everywhere
- local are only accessed inside a function


## Recursion

The recursively written factorial() function:

```
function factorial(number){
	if (number == 1) {
		return number;
	}
	else {
		return number * factorial(number-1);
	}
}
```

any function that uses recurison can be written in a iterative manner.

# Objects and Object-Oriented Programming

Data structures are implemented as objects. Objects are created by defining a constructor function that includes declarations for an objects properties and functions.

Defining and using the Checking object, complete defintion and test program:

```
function Checking(amount) {
	this.balance = amount;
	this.deposit =  deposit;
	this.withdraw = withdraw;
	this.toString = toString;
}

function deposit(amount) {
	this.balance += account;
}

function withdraw(amount) {
	if(amount <= this.balance) {
		this.balance -= amount;
	}
	if (amount > this.balance) {
		print("Insufficient funds");
	}
}

function toString() {
	return "Balance: " + this.balance; 
}

let account = new Checking(500);
account.deposit(1000);
console.log(account.toString()); // displays "Balance: 1500"
account.withdraw(750);
console.log(account.toString()); // displays "Balance: 750"
account.withdraw(800); // displays "Insufficient funds"
console.log(account.toString()); // displays "Balance: 750"
```

