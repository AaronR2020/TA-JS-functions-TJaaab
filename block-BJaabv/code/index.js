// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppyAge,Rate) {
  return puppyAge/Rate;
}
alert(calculateDogAge(3,7));

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age,NoOfMovies) {
  const max_age=100;
  return(NoOfMovies*4*12*age-NoOfMovies*4*12*max_age); 
}
calculateMoviesToWatch(24,4);

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius=1) {
  return `${celsius*33.8}F is ${celsius}Cs`
}
celsiusToFahrenheit(26);
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(fahar=33) {
  return `${fahar}F is ${fahar/33.8}Cs`
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(x=1,n=1) {
  return x>0?x**n:`number less than 0 not allowed`;
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n=1,vari) {
  let sum=0;
  let prod=0;
if(vari=="sum"||vari=="product"){
  {
    if(vari=="sum"){
      for(let i=1;i<=n;i++){
        sum+=i
      }
      return sum;
    }
    else{
      for(let i=1;i<=n;i++){
         prod*=i
      }
      return prod;
    }
  }
}
else{
  return "Not a valid input"
}
}


sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumN(n) {
  let sum=0;
if(n>0){
          for(let i=1;i<=n;i++){
        sum+=i;
  }
  return sum;
}
else{
  return "Not a valid input"
}
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here
function sumMul(n) {
  let sum=0;
if(n>0){
          for(let i=1;i<=n;i++){
            if(i%7==0||i%5==0)
            {sum+=i;
            }
  }
  return sum;
}
else{
  return "Not a valid input"
}
}

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a,b) {
  return a<b? a:b;
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(a) {
  // Your code goes here
  return typeof(a);
}
