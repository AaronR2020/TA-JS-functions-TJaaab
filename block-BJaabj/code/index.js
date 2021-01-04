/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/
const sayHello=()=>{return `Hello World`;}
alert(`${sayHello()}`);


/*
2. Create a function named `fullName` with the following steps:

  - Prompts a message saying `Enter your first name` and 
  store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and
   store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/
function fullName(){
  let firstName=prompt("Enter your First name");
  let lastName=prompt("Enter your Last name");
  return fullName=`${firstName} ${lastName}`;
}
alert(fullName());

/*
3. Create a function named `addTwoNumbers` with the following steps:

  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/
const addTwoNumbers=()=>{
  let firstNum=+prompt("Enter your First number");
  let secondNum=+prompt("Enter your Last number");
  return sum=`${firstNum+secondNum}`;
}
alert(addTwoNumbers());

/*
4. Create a function named `getTable` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9
  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/
const getTable=()=>{
  let num=+prompt("Enter a number to check its multiple");
  for(let i=1;i<=10;i++){
    console.log(`${num}*${i}=${num*i};\n`)
  }
  }
  getTable();
/*
5. Create a function named `isLeapYear` with the following steps:

  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/
const leapyear=()=>{
  let year=+prompt("Enter a year");
  if(year%4==0||year%100==0||year%400){
    return `leap year`
  }
  else{
    return `not leap year`
  }
}
console.log( `\n${leapyear()}`)
/*
6. Create a function named `getFactorial` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`

*/
const getFactorial=()=>{
  let fact=1;
  let number=+prompt(`Enter a number`)
  const numberFact=number;
  while(number>0){
    fact*=number;
    --number;
  }
  return `The factorial of ${numberFact} is ${fact}`;
}
alert(getFactorial());