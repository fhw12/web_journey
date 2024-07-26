'use strict';

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