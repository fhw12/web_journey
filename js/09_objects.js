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


const username1 = 'user1234';
const password1 = '12345678';
const user2 = { username1, password1 };
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



const obj1 = {
    name: 'admin',
    languages: {
        favorite: "javascript",
        first: "javascript",
    }
};

const obj2 = {
    name: 'admin',
    languages: {
        favorite: "javascript",
        first: "javascript",
    }
};

const obj3 = Object.assign({}, obj1); // copy
const obj4 = { ... obj2 }; // copy

obj3.name = "user3";
obj4.name = "user4";

const areEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if(keys1.length !== keys2.length){
        return false;
    }

    for(const key in object1){
        const value1 = object1[key];
        const value2 = object2[key];

        if(typeof(value1) === 'object' && typeof(value2) === 'object'){
            const result = areEqual(value1, value2);
            if (result) {
                continue;
            } else {
                return false;
            }
        }

        if(value1 !== value2) {
            return false;
        }
    }

    return true;
}

console.log(
    'obj1: ', obj1,
    '\nobj2: ', obj2,
    '\nobj3: ', obj3,
    '\nobj4: ', obj4,
);
console.log('obj1 and obj2 are equal:', areEqual(obj1, obj2));
console.log('obj1 and obj3 are equal:', areEqual(obj1, obj3));


const obj5 = {status: 'online', languages: { test: "test" }};
// Object.assing(), {...}
// only can copy root keys-values
// and obj in obj assigns from last argument (last obj) 
const obj6 = Object.assign({}, obj4, obj5); // obj6 -> obj4 plus obj5
console.log('obj6: ', obj6);
const obj7 = {...obj1, ...obj5}; // obj6 -> obj1 plus obj5
console.log('obj7: ', obj7);


const newUser1 = {
    username: 'user1',
    password: '1234',
    language: {
        programming: 'javascript',
        favorite: {
            programming: 'js',
        }
    },
}

const newUser2 = {
    username: 'user2',
    password: '1234',
}

console.log(newUser1.language?.programming);
// console.log(newUser2.language.programming); // error
// optional chaining
console.log(newUser1.language?.favorite?.programming);
console.log(newUser2.language?.programming);
console.log(newUser2.language?.favorite?.programming);


const { username, password } = newUser2;

function log({username="username", password="password"}){
    console.log('username: ', username, '\npassword: ', password);    
}

log({username: username});
log({password: password});
log({username, password});
log({username: 'newUser1', password: 'newUserPassword1'});



// equals:
// const newUserName1 = newUser2['username'];
const { username: newUserName1 } = newUser2;
console.log(newUserName1);

const { language: lang = 'JS'} = newUser2;
console.log(lang);

const { language = 'JavaScript'} = newUser2;
console.log(language);


function printUser({ username, password, ...otherInformation }){
    console.log('username: ', username, 'password: ', password);
    console.log('other information: ', otherInformation);
}

printUser({
    username: 'user0',
    password: '0%@^!$0$0_&^!@&1@!&*0000#@&(3',
    role: 'admin',
});

printUser({
    username: 'qwerty',
    password: 'qwerty123',
});