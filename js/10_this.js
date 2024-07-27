'use strict';

console.log('global this: ', this);

const user = {
    username: 'admin',
    password: '1234',
    showThis: function() {
        console.log('object this:', this);
    },
    showUsername: function() {
        console.log(this.username);
    },
    showThisArrowFunction: () => {
        console.log('"this" in the object with the arrow function: ', this);
    }
}

user.showThis();
user.showUsername();
user.showThisArrowFunction();


// print username function with this
function printUsername(){
    console.log('printUsername function, username: ', this.username);
}

user.printUsername = printUsername;
user.printUsername();


const counter = {
    value: 0,
    inc: function() {
        this.value++;
        return this;
    }
}

console.log(counter);
counter.inc().inc().inc();
console.log(counter);