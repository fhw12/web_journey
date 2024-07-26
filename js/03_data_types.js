'use strict';

// string
const str1 = 'Hello';
const str2 = "World";
const str3 = `${str1}, ${str2}!`;

console.log(str3);

// number
const amount = 5;
const price = 199.99;
const balance = -50;

console.log(amount, price, balance);
console.log(amount / 'text'); // will be printed "NaN" (not a number)
console.log(amount / 0); // will be printed "Infinity"
console.log(-10 / 0); // will be printed "-Infinity"

// big int
const bigNumber = 12345678901234567890n;

console.log(bigNumber + 1n);

// boolean
const isProgrammer = true;
const hasCodeError = false;

console.log(isProgrammer, hasCodeError);

// null
const data = null;

console.log(data);
console.log(typeof(data)); // object

// undefined
let yourName;

console.log(yourName);

// object
const user = {
    favoriteProgrammingLanguage: 'JavaScript',
    hasLaptop: true, 
}
const priceHistory = [10, 14, 11, 20, 15];

console.log(user);
console.log(priceHistory);



// type conversion
// String(), Number(), Boolean()

console.log(typeof(String(5)), typeof(Number('25')), typeof(Boolean('false')));