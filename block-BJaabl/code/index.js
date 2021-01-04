/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
const sayHello=()=>{
  let name=prompt("Enter Name");
  return name;
}
alert(`hello ${sayHello()}!`);
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
const getFullName=(first,second)=>{
  return `full name is ${first} ${second}`
}
let firstName=prompt(`enter first name`);
let secondName=prompt(`enter last name`);
console.log(getFullName(firstName,secondName));
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
const addTwoNumbers=(a=0,b=0)=>{
  if(typeof(a)==typeof(3)&&typeof(b)==typeof(3)) {return a+b}  else{return `invalid input`;}
}
let a=+prompt("enter a number");
let b=+prompt("enter another numver");
alert(addTwoNumbers(a,b));

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
const addTwoNumber=(aa=0,bb=0,cc)=>{
  if(typeof(aa)==typeof(3)&&typeof(bb)==typeof(3)) {
    switch(cc){
      case "add": return aa+bb;
      case "sub":  return aa-bb;;
      case "mul":  return aa*bb;;
      case "div":  return aa/bb;;
    }

  } 
   else{
     return `invalid input`;
    }
}
let aa=+prompt("enter a number");
let bb=+prompt("enter another numver");
let cc=prompt("enter a operator add/sub/mul/divs");
alert(addTwoNumber(aa,bb,cc));

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
const isLeapYear=(a)=>{
if(a%4==0||a%100==0||a%400==0){
  return `leap year`;
}
else{
  return `not leap year`
}
}
let leapYear=+prompt("Enter year to identify if leap or not");
alert(isLeapYear(leapYear));

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
const getFactorial=(number)=>{
  let fact=1;
  while(number>0){
    fact*=number;
    --number;
  }
  return fact;
}
let number=+prompt("Enter number to find its factorial");
alert(getFactorial(number));