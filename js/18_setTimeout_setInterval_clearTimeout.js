'use strict';

// setTimeout
function sayHello(){
    console.log('Hello');
}

function sayText(text){
    console.log(text);
}

setTimeout(sayHello, 1000);

setTimeout(() => { sayText('2'); }, 2000);
setTimeout(sayText, 3000, '3');



// setTimeout, clearTimeout
const alertWindowTimeoutId = setTimeout(
    () => {
        alert('Message');
    }, 1000
)

clearTimeout(alertWindowTimeoutId);



// setInterval, clearInterval
let counter = 1;
let intervalId = setInterval(
    () => {
        console.log(`[${counter}] setInterval function called!`);
        counter++;
        if(counter == 11){ // 10 times
            clearInterval(intervalId);
        }
    }, 500
);