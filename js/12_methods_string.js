'use strict';

const username = "Admin";
const programmingLanguage = "JavaScript";
const message = "   Hello   ";

console.log('username: ', username);
console.log('programmingLanguage: ', programmingLanguage);
console.log('message: ', message);

console.log('length of username string: ', username.length);
console.log('length of programmingLanguage string: ', programmingLanguage.length);

console.log('username[0]: ', username[0]);
console.log('username.at(-1): ', username.at(-1));

console.log('programmingLanguage.toLowerCase(): ', programmingLanguage.toLowerCase());
console.log('programmingLanguage.toUpperCase(): ', programmingLanguage.toUpperCase());

console.log('message.trim():', message.trim());
console.log('message.trimStart():', message.trimStart());
console.log('message.trimEnd():', message.trimEnd());

console.log('username.indexOf("i"): ', username.indexOf('i'));
console.log('username.indexOf("qwerty"): ', username.indexOf('qwerty'));
console.log('message.indexOf("ll"): ', message.indexOf('ll'));

console.log('username.includes("i"): ', username.includes('i'));
console.log('username.includes("qwerty"): ', username.includes('qwerty'));
console.log('message.includes("ll"): ', message.includes('ll'));

console.log('programmingLanguage.startsWith("Java")', programmingLanguage.startsWith('Java'));
console.log('programmingLanguage.startsWith("Python")', programmingLanguage.startsWith('Python'));
console.log('programmingLanguage.endsWith("Script")', programmingLanguage.endsWith('Script'));
console.log('programmingLanguage.endsWith("Lang")', programmingLanguage.endsWith('Lang'));

console.log('programmingLanguage.substring(0, 4): ', programmingLanguage.substring(0, 4));
console.log('programmingLanguage.substring(4, 0): ', programmingLanguage.substring(4, 0));
console.log('programmingLanguage.substring(4): ', programmingLanguage.substring(4));

console.log('programmingLanguage.slice(-6): ', programmingLanguage.slice(-6));
console.log('programmingLanguage.slice(4, 0): ', programmingLanguage.slice(4, 0));
console.log('programmingLanguage.slice(-6, -3): ', programmingLanguage.slice(-6, -3));

console.log('username.repeat(3): ', username.repeat(3));

console.log('programmingLanguage.replace("Java", "Type"): ', programmingLanguage.replace('Java', 'Type'));

const str1 = "I learn html. I learn css. I learn js."
console.log('str1: ', str1);
console.log('str1.replaceAll("learn", "know")', str1.replaceAll('learn', 'know'));

const number = "+0 (000) 000 - 000 - 000 - 000 - 000 - 000";
console.log('number: ', number);
console.log('number with replaced digits to number sign: ', number.replace(/\d/g, '#'));

console.log('programmingLanguage.split("a")', programmingLanguage.split('a'));