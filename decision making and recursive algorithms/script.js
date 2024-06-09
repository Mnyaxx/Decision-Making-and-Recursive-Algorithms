//? ticket price task
function getTicketPrice() {
    // Prompt the user to enter their age
    let age = prompt("Enter your age:");

    // Convert the input into a number
    age = parseInt(age);

    // Determine the price based on age
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else if (age >= 18) {
        price = 20;
    } else {
        console.log("Invalid age entered.");
        return;
    }

    // Display the ticket price
    console.log("The price of your movie ticket is: $" + price);
}

// Example usage
getTicketPrice();

//? leap year check 
function isLeapYear(year) {
    
    if (year % 4 === 0) {
        // 
        if (year % 100 === 0) {
            
            if (year % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true; 
        }
    } else {
        return false; 
    }
}


let year = prompt("Enter a year:");
year = parseInt(year);

if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//?fibonacci sequence
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example 
let n = prompt("Enter a position (n) to get the nth Fibonacci number:");
n = parseInt(n);

if (n >= 0) {
    let result = fibonacci(n);
    console.log("The " + n + "th Fibonacci number is: " + result);
} else {
    console.log("Please enter a non-negative integer.");
}
//?rasing to power task 
function power(base, exponent) {
    
    if (exponent === 0) {
        return 1;
    }
    
    return base * power(base, exponent - 1);
}

// Example 
let base = prompt("Enter the base number:");
let exponent = prompt("Enter the exponent:");

base = parseFloat(base);
exponent = parseInt(exponent);

if (!isNaN(base) && !isNaN(exponent)) {
    let result = power(base, exponent);
    console.log(base + " raised to the power of " + exponent + " is: " + result);
} else {
    console.log("Please enter valid numbers for both base and exponent.");
}
