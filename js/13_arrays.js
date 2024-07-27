'use strict';

const usernames = ['admin', 'user1', 'user2', 'user3'];

console.log('usernames: ', usernames);
console.log('typeof(usernames): ', typeof(usernames));

usernames[0] = 'owner';
console.log('usernames: ', usernames);
console.log('usernames[1000]: ', usernames[1000]);

console.log('usernames[usernames.length - 1]: ', usernames[usernames.length - 1]);
console.log('usernames.at(-1): ', usernames.at(-1));

usernames.push('newUser1');
console.log('usernames: ', usernames);
usernames.push('newUser2', 'newUser3');
console.log('usernames: ', usernames);

usernames.unshift("admin");
console.log('usernames: ', usernames);

const deletedUser1 = usernames.shift(); // deleted start item
const deletedUser2 = usernames.pop() // deleted end item

console.log(deletedUser1, deletedUser2);
console.log('usernames: ', usernames);

console.log(usernames.toString());
console.log(usernames.join(', '));

const usernames2 = [...usernames];
const usernames3 = usernames.slice(0, 3);
console.log(usernames2, usernames3);

const usernames4 = [...usernames2, ...usernames3];
console.log(usernames4);

const usernames5 = usernames2.concat(usernames4);
console.log(usernames5);