'use strict';

const num = 1000.12345;

console.log(num.toFixed(2));
console.log(num.toPrecision(5));
console.log(num.toString());
console.log(num.toString(2)); // binary

console.log('random: ', Math.random());
console.log('abs(7): ', 7);
console.log('abs(-15): ', -15);
console.log('pow(2, 3): ', Math.pow(2, 3));
console.log('2 ** 3: ', 2 ** 3);
console.log('sqrt(4): ', Math.sqrt(4));
console.log('cbrt(8): ', Math.cbrt(8));
console.log('min: ', Math.min(1, 2, 3, 4, 5));
console.log('max: ', Math.max(1, 2, 3, 4, 5));
console.log('max: ', Math.max(...[1, 2, 3, 4, 5]));

console.log('floor: ', Math.floor(4.1));
console.log('round: ', Math.round(4.1));
console.log('ceil: ', Math.ceil(4.1));
console.log('trunc: ', Math.trunc(4.1));
console.log('trunc: ', Math.trunc(-4.1));


const numberAsString1 = "+15%";
const numberAsString2 = "q123";
const numberAsString3 = " 1.5px";
const numberAsString4 = "a 1.5px";

console.log(numberAsString1, '\n', parseInt(numberAsString1));
console.log(numberAsString2, '\n', parseInt(numberAsString2));
console.log(numberAsString3, '\n', parseInt(numberAsString3));
console.log(numberAsString4, '\n', parseInt(numberAsString4));
