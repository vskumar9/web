/**
 * conditional statements in JavaScript. Let's get started. 
 * In JavaScript conditions statements are allow you to perform 
 * different actions based on different conditions. The two most 
 * common condition statements in JavaScript are if/else and 
 * switch cases. If/else statements allows you to execute different 
 * blocks of code depending on whether a condition is true or false. 
 * Let's look at the syntax for if/else statement in JavaScript. 
 * Now let's also see an example here to understand if and else condition
 */

let age = 18;

if(age>17){
    console.log("Your an adult.")
}
else{
    console.log('your not yet an adult.')
}

let day = 2;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('wednesday');
    default:
        console.log("NaN");
        break;
}