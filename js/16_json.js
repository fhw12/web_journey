'use strict';

const user = {
    username: 'admin',
    password: '12345',
}

const userAsString = JSON.stringify(user);

console.log(userAsString);

const user2 = JSON.parse(userAsString);
const user3 = JSON.parse(`
{
    "username": "user",
    "password": "1234"
}`);

console.log(user2);
console.log(user3);

const data = {
    status: "okey",
    sayHello: function() {
        console.log("Hello");
    }
}

console.log(JSON.stringify(data)); // function in object will not be added to string