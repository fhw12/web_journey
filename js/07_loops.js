'use strict';

// while
let count = 0;

console.log("while");
while(count < 5) {
    console.log(count);
    count++;
}

// do - while
console.log("do while");
do {
    console.log(count);
    count--;
} while (count > 0 && count < 3);

// for
console.log("for");
for(let i = 10; i <= 15; i++){
    console.log(i);
}