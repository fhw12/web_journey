'use strict';

// function declaration
function sayHello(){
    console.log("Hello!");
}

sayHello();

function sayText(text){
    console.log(text);
}

sayText("How are you?");

function sum(a = 0, b = 1){
    return a + b;
}

console.log(sum(7, 3));
console.log(sum(4));
console.log(sum(undefined, 3));

function consoleLogArguments(){
    console.log(arguments);
}

consoleLogArguments(5, 'hi', 1000n, null);

// function expressions
const hi = function(){
    console.log('hi!');
}

hi();

// arrow function
const sayHi = () => {
    //console.log(arguments); // arguments are unavailable in the arrow function
    console.log('Hi');
}

const plus = (a, b) => a + b;

sayHi();
console.log(plus(5, 2));

// callback
const showConfirm = (afterActions = () => {}) => {
    const result = confirm();
    afterActions(result)
}

const showResult = (result) => { console.log(result); }

showConfirm(showResult);
showConfirm();

// return function
const getFunctionHello = () => {
    return () => { console.log("Hello"); }
}

const helloFunction = getFunctionHello();
helloFunction();