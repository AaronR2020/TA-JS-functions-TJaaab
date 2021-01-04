// look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and 
converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"



/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(){
  let number=+prompt("Enter a Number")
  return number+1;
}
// - Write a Function Expression
const addOne=function(){
  let number=+prompt("Enter a Number")
  return number+1;
}
// - Write an Arrow Function without curly brackets(if possible)
const addOne=()=>{
  let number=+prompt("Enter a Number")
  return number+1;
}
// - Write an Arrow Function with curly brackets
const addOne=()=>{
  let number=+prompt("Enter a Number")
  return number+1;
}
// - Execute the function
addOne();
// - Execute the function and store the return value in a variable.
let retVal=addOne();
// - What is the typeof returnValue
//number

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(){
  let number=+prompt("Enter a Number")
  return number-1;
}
// - Write a Function Expression
let substractOne=function(){
  let number=+prompt("Enter a Number")
  return number-1;
}
// - Write an Arrow Function without curly brackets(if possible)
let substractOne=()=>{
  let number=+prompt("Enter a Number")
  return number-1;
}
// - Write an Arrow Function with curly brackets
let substractOne=()=>{
  let number=+prompt("Enter a Number")
  return number-1;
}
// - Execute the function
substractOne();
// - Execute the function and store the return value in a variable.
let varSub=substractOne();
// - What is the typeof returnValue
//number



/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(){
  let number1=+prompt("Enter 1st Number")
  let number2=+prompt("Enter 2nd Number")
  return number1-number2;
}
// - Write a Function Expression
let sub=function(){
    let number1=+prompt("Enter 1st Number")
    let number2=+prompt("Enter 2nd Number")
    return number1-number2;
}
// - Write an Arrow Function without curly brackets(if possible)
let sub=()=>{
  let number1=+prompt("Enter 1st Number")
  let number2=+prompt("Enter 2nd Number")
  return number1-number2;
}
// - Write an Arrow Function with curly brackets
let sub=()=>{
  let number1=+prompt("Enter 1st Number")
  let number2=+prompt("Enter 2nd Number")
  return number1-number2;
}
// - Execute the function
sub();
// - Execute the function and store the return value in a variable
let varsub=sub();
// - What is the typeof returnValue
//sub

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(){
  let number=+prompt("Enter a Number")
  return number*number;
}
// - Write a Function Expression
let square=function (){
  let number=+prompt("Enter a Number")
  return number*number;
}
// - Write an Arrow Function without curly brackets(if possible)
let square=()=>{
  let number=+prompt("Enter a Number")
  return number*number;
}
// - Write an Arrow Function with curly brackets
let square=()=>{
  let number=+prompt("Enter a Number")
  return number*number;
}
// - Execute the function
square();
// - Execute the function and store the return value in a variable
let sq_var=square();
// - What is the typeof returnValue
//num
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(a=1,b=1){
  return a>b ? a :  b;
}
// - Write a Function Expression
let isGreater=function (a=1,b=1){
  return a>b ? a :  b;
}
// - Write an Arrow Function without curly brackets(if possible)
let isGreater=(a=1,b=1)=>{return a>b ? a :  b;} 

// - Write an Arrow Function with curly brackets
let isGreater=(a=1,b=1)=>{return a>b ? a :  b;} 
// - Execute the function
isGreater(32,56);
// - Execute the function and store the return value in a variable
let greater=isGreater(23,67);
// - What is the typeof returnValue
//number
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(a=1){
  return a%2==0 ? `even` :  `odd`;
}
// - Write an anonymous Function Expression
let oddOrEven=function(){return a%2==0 ? `even` :  `odd`;}
// - Write an named Function Expression
function oddOrEven(a=1){
  return a%2==0 ? `even` :  `odd`;
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven=(a)=>{return a%2==0 ? `even` :  `odd`;}
// - Write an Arrow Function with curly brackets
let oddOrEven=(a)=>{return a%2==0 ? `even` :  `odd`;}
// - Execute the function
oddOrEven(3);
// - Execute the function and store the return value in a variable
let oddOrEven_var=oddOrEven(6);
// - What is the typeof returnValue
//string