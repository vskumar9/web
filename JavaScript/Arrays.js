/**
 * In programming an array is a collection of values 
 * that are stored under a single variable name. 
 * Arrays can hold any type of value, including numbers, 
 * strings and even other arrays. Each value in and array 
 * is accessed through its index which starts at zero for 
 * the first value in the array. Let's understand by an example. 
 * So let's say that we have array of numbers and it normally 
 * starts with square brackets. So let's say we have numbers 
 * as 10, 20, 30, 40 and 50. In this example we have an array 
 * and you can call it as my array or whatever the variable name 
 * you want to give. It contains five values 10, 20, 30, 40 and 50. 
 * Each value is stored in a separate slot in the array, which 
 * is identified by its index number and how we can identify it. 
 * So the first value in the array 10 is stored in slot 0 and 
 * that is called as index. The second value, 20, is stored in 
 * slot 1, then 2, then 3, then 4, and then so on. Let's also 
 * see the array example in Vs code. You can think of array in 
 * JavaScript like a drawer with multiple compartments. Each 
 * compartment has a label and you can put things in each 
 * compartment. For example, let's say that you have a drawer labeled fruits.
 */

//fruits

let fruits = ['apple', 'orage', 'banana'];

console.log(fruits[0]);
console.log(fruits.push('grapes'));
console.log(fruits);
fruits.pop();

console.log(fruits);