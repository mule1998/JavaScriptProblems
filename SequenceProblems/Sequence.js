//Problem 1 : single digit number
let Take = (Math.floor(Math.random() * 10));
console.log("Single digit random number =  " + Take);

//Problem 2 : random dice number
let num = (Math.floor(Math.random() * 6)+ 1 );
console.log("random dice  number = " + num);

//Problem 3: Addition of two random dice number
let num1 = (Math.floor(Math.random() * 6) + 1);
console.log("Dice one is " + num1);
let num2 = (Math.floor(Math.random() * 6) + 1);
console.log("Dice two is " + num2);
let Addition = num1 + num2;
console.log("Addition of the two random dice numbers = " + Addition);

//Problem 4 : Sum and average  of two digit random number
let number1 = (Math.floor(Math.random() * 99) + 1);
let number2 = (Math.floor(Math.random() * 99) + 1);
let number3 = (Math.floor(Math.random() * 99) + 1);
let number4 = (Math.floor(Math.random() * 99) + 1);
let number5 = (Math.floor(Math.random() * 99) + 1);

let sum = (number1 + number2 + number3 + number4 + number5);
console.log("Sum of 5 two digit random number is  = " + sum);

let Average = sum / 5;
console.log("Average of five two digit random number is  = " + Average);

//Problem 5 : 
// (A): Inch to feet conversion.
let inches = 42;
let InchToFeet = inches / 12;
console.log("Inch to feet conversion =  " + InchToFeet);

//(B): Coversion of ft into meter of Rectangle. 
let plotInFeet = 60 * 40;
let plotInMeters = plotInFeet / 3.2808;
console.log("Conversion of rectangle into meters =  " + plotInMeters);

//(C): Area of Plots in acres.
let plotInFeet1 = 60 * 40;
const numOfPlots = 25;
let plotInMeters1 = numOfPlots * (plotInFeet1 / 3.281);
console.log("Calculation of 25 plots  =" + plotInMeters1);