/*

Data structures and types
Data types
The latest ECMAScript standard defines eight data types:

Seven data types that are primitives:
Boolean. true and false.
null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
undefined. A top-level property whose value is not defined.
Number. An integer or floating point number. For example: 42 or 3.14159.
BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
String. A sequence of characters that represent a text value. For example: "Howdy".
Symbol. A data type whose instances are unique and immutable.
and Object

*/

let answer = 42;
console.log(answer);
answer = "Thanks for all the fish!";
console.log(answer);

/* 
Numbers and the '+' operator
In expressions involving numeric and string values with the + operator, JavaScript converts 
numeric values to strings. For example, consider the following statements:
*/

x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"

console.log(x);
console.log(y);
console.log(z);

// With all other operators, JavaScript does not convert numeric values to strings. For example:

console.log("37" - 7); // 30
console.log("37" * 7); // 259

/*

In JavaScript, a data type represents the type of 
data that can be stored and manipulated in a program. 
Let's look at some common data types in JavaScript. 

*/

// Number
let x = 5;

// BigInt
const BigInt = 9665464564594851299999161654682134644n;

// String
let name = 'sanjeev'

// Boolean
let isTrue = true

// null
let m = null;

// undefined
var age;

// object
let person = {
    name : 'kumar',
    age : 23
}

// symbol

let id = Symbol('id')