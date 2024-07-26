'use strict';

const user = {
    username: 'admin',
    password: '12345678',
};
user.role = 'owner';
user.password = 'qwerty123qwerty%00000$qwerty@1234567890';
console.log(user.username);
console.log(user);
delete(user.password);
console.log(user);


const username = 'user1234';
const password = '12345678';
const user2 = { username, password }
console.log(user2);



const keyName = 'message';
const value = 'Hello! How are you?';
const dialog = {
    [keyName]: value,
};
console.log(dialog);
console.log('message' in dialog);
console.log('username' in dialog);

for(const key in dialog){
    console.log(`${key}: ${dialog[key]}`);
}