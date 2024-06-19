console.log("Hello world");
// ------------------------------------------------
console.log(eval("3+5"));
// ------------------------------------------------
(function() {
        "use strict";
        function greetMe(Name){
            console.log(`Hello ${Name}`);
        }

        greetMe("Sanjeev");
    })();

// ------------------------------------------------

if(Math.random() > 0.5) {
    const y = 5; // ReferenceError: y is not defined
}
// console.log(y);

// ------------------------------------------------

if(true){
    var x = 10;
}

console.log(x);

// ------------------------------------------------

console.log(x === undefined); // True

var x = 3;

(function(){
    var x;
    console.log(x); // undefined
    x = "local value";
})();

// -----------------------------------------

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";

console.log(MY_OBJECT); // { key: 'otherValue' }

// -------------------------------------------

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
var name = MY_ARRAY.pop();
console.log(name);

/* a data type represents the type of data that can be
 stored and manipulated in a program. Let's look at some 
 common data types in JavaScript
 */

//  1. Number
let number = 5

//  2. BigInt +-((2**53)-1)
const BigInt = 8747895548466664513849644916464646114946n

// String
let name = 'sanjeev'

// Boolean
let isTrue = true

// Null
let x = null