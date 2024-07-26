const year = 2024;

if(year == 2024) {
    console.log("the best time to level up skills");
} else if(year >= 2100) {
    console.log("are you from the future?");
} else {
    console.log("i have no idea of what to say");
}

const isOnline = true;
const userStatus = isOnline ? 'User is online' : 'User is offline';

console.log(userStatus);

// coalescing operator

console.log('\n\ncoalescing operator:\n\n')

const username1 = "admin";
const username2 = null;

// value ?? another_value
// if value is null, returns another_value
// if value is not null, returns value
console.log(username1 ?? 'User is not defined');
console.log(username2 ?? 'User is not defined');