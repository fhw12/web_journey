'use strict';

const data = ['admin', '1234'];
const [username, password] = data;
console.log(data, username, password);


const usernames = ['owner', 'admin', 'user1', 'user2', 'user3', 'admin'];

for(let i = 0; i < usernames.length; i++){
    console.log('for', usernames[i]);
}

usernames.forEach(
    (value, index, array) => {
        console.log('forEach', value);
    }
);

console.log('usernames.indexOf("admin"):', usernames.indexOf('admin'));
console.log('usernames.lastIndexOf("admin"):', usernames.lastIndexOf('admin'));

console.log('user3 index:',
    usernames.findIndex((value, index, array) => {
        if(value === 'user3'){
            return true;
        }
    })
);

console.log('admin last index:',
    usernames.findLastIndex((value, index, array) => {
        if(value === 'admin'){
            return true;
        }
    })
);

console.log('admin includes:', usernames.includes('admin'));
console.log('admin2 includes:', usernames.includes('admin2'));
console.log('admin some',
    usernames.some((value) => {
        if(value == 'admin'){
            return true;
        }
    }
));

console.log('admin2 some',
    usernames.some((value) => {
        if(value == 'admin2'){
            return true;
        }
    }
));

console.log('length > 0, every',
    usernames.every((value) => {
        if(value.length > 0) {
            return true;
        }
    })
);

console.log('length == 0, every',
    usernames.every((value) => {
        if(value.length == 0) {
            return true;
        }
    })
);

console.log('find user starts with user:',
    usernames.find((value) => {
        if(value.startsWith('user')){
            return true;
        }
    })
);

console.log('filter user starts with user:',
    usernames.filter((value) => {
        if(value.startsWith('user')){
            return true;
        }
    }) // return array
);

console.log('using a map to add a _user at the end for each element of array');
const usernamesModified = usernames.map((value) => {
    return value + '_user';
});
console.log(usernamesModified);


const arr1 = ["q", "qw", "qwe", "qwer", "qwert", "qwerty"];
// average length of each string element of an array
// reduce: from start to end
const average = arr1.reduce(
    (sum, value) => {
        return sum + value.length;
    }, 0
) / arr1.length;
console.log(average);

// reduceRight: from end to start
console.log ('sum: ', arr1.reduceRight(
    (sum, value) => { console.log(value); return sum + value.length; }, 0
));

// reverce
const arr2 = [2, 4, 8, 16, 32, 64];
const ReverseArr2 = [...arr2].reverse();
const ReverseArr3 = arr2.toReversed();
console.log(arr2);
console.log(ReverseArr2);
console.log(ReverseArr3);

// sort
const arr3 = [8, 4, 10, 11, 3123, 12, 1000, 130, 150];
const sortedArr3 = arr3.toSorted((a, b) => a - b);
console.log(arr3);
arr3.sort((a, b) => a - b);
console.log(arr3);
console.log(sortedArr3);