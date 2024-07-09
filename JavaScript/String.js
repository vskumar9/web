/**
 *  In JavaScript, the textual data is stored as strings. 
 * There is no separate type for a single character. String 
 * is a sequence of characters enclosed in quotes, either 
 * single quotes, double quotes, or backticks.
 */

let str1 = "Hello, World!";
let str2 = 'This is a string.'
let str3 = `123`;

console.log(typeof str1, typeof str2, typeof str3);
console.log(`1 + 2 = ${1 + 2}`);

console.log(str1.length);
console.log(str1[2]);
console.log(str1.substring(1,4));

