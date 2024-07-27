const user = {
    username: 'admin',
    password: '1234',
    role: 'owner',
}

const keysOfUser = Object.keys(user);
console.log(keysOfUser);

const valuesOfUser = Object.values(user);
console.log(valuesOfUser);

let entriesOfUser = Object.entries(user);
console.log(entriesOfUser);

entriesOfUser.forEach((entry) => {
    console.log(entry[0], ':', entry[1]);
});

entriesOfUser.forEach(([key, value]) => {
    console.log(key, ':', value);
});

// convert keys to upperCase
entriesOfUser = entriesOfUser.map(([key, value]) => {
    return [key.toUpperCase(), value];
});

const user2 = Object.fromEntries(entriesOfUser);

console.log(user2);



// Map
const data = new Map();

data.set('language', 'javascript');
data.set('theme', 'dark');

console.log(data);

const data2 = new Map([
    ['something', '12345'],
    ['smartphone', 'android'],
]);

console.log(data2);

console.log(data.get('language'));
console.log(data.get('theme'));

console.log(data.has('language'));
console.log(data.has('lang'));
console.log(data.has('theme'));

data2.delete('something');
console.log(data2);

console.log(data.size);
data.clear();
console.log(data);


const data3 = new Map();
data3.set('language', 'javascript');
data3.set('isAdmin', false);

console.log('data3: ', data3);
console.log('data3 keys: ', [...data3.keys()]);
console.log('data3 values: ', [...data3.values()]);
console.log('data3 entries: ', [...data3.entries()]);

const dataKeys = data3.keys();

for(const key of dataKeys){
    console.log('key: ', key);
}

data3.forEach(
    (value, key, map) => {
        console.log(key, value, map);
    }
)

const obj1 = {
    a: 2,
    b: 3,
}

// map from object
const data4 = new Map( Object.entries(obj1) );
console.log(obj1, data4);
data4.set('something', '1234567890');

// object from map
console.log(data4);
const obj2 = Object.fromEntries(data4);
console.log(obj2);



// Set
const set = new Set([1, 2, 2, 3, 1]);
console.log('set', set);

set.add(10);
set.add(10);
set.add(10);

console.log('set', set);

set.delete(2);

console.log('set', set, set.size);

// keys, values, entries are available for set
// however keys and values return the equal items
// entries returns array of set items
