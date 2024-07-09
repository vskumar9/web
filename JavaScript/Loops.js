/**
 * So let's get started, looping structures are used in programming 
 * to repeat a block of code multiple times. In JavaScript there 
 * are three types of looping structures we have for loops while 
 * loops and do while loops. Let's discuss each one of them in detail. 
 * So first is for loop, it is a commonly used loop when you know the 
 * number of times you want to execute a block of code. This is the 
 * syntax of the for loop. The initialization statement is executed before
 *  the loop starts and is usually used to declare and initialize a 
 * variable. Here we have initialization option there. The condition is 
 * then evaluated at the beginning of each loop iteration and if it is true, 
 * the code inside the loop is executed. The increment statement is executed 
 * at the end of each loop iteration and is typically used to update the 
 * value of the loop counter
 */
let i;

for(i = 0; i < 10; i++){
    console.log(i+1)
}

while(i>=0){
    console.log(i);
    i--;
}
console.log(i);

do{
    console.log(i);
    i++;
}while(i<10);