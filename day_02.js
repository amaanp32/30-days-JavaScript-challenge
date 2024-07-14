//Activity 1:Arithmetic Operations
let val1 = 12;
let val2 = 12;

//Addition of val1 and val2
console.log(`Addition of ${val1} + ${val2} is "${val1 + val2}"`)

//Substraction of val1 and val2
console.log(`Subtraction of ${val1} + ${val2} is "${val1 - val2}"`)

//Multiplication of val1 and val2
console.log(`Multiplication of ${val1} + ${val2} is "${val1 * val2}"`)

//Division of val1 and val2 
console.log(`Division of ${val1} + ${val2} is "${val1 / val2}"`)

// Modulus of val1 and val2 
console.log(`Modulus of ${val1} + ${val2} is "${val1 % val2}"`)


//Activity 2:Assignment Operators
let firstValue = 7;
let secondValue = 20;

//Task-6
let finalValue = firstValue += secondValue
console.log(finalValue)

//Task-7
let finalValue2 = firstValue -= secondValue
console.log(finalValue2)

//Activity 3: Comparison Operators
//Task-8
let one = 15;
let two = 25;
console.log(`Is ${one} is Greater than ${two} "${one > two}"`);
console.log(`Is ${one} is Less than ${two} "${one < two}"`);

//Task-9
let three = 33;
let four = 30;
console.log(`Is ${three} is Greater than or Equal to ${four} "${three >= four}"`);
console.log(`Is ${three} is Less than or Equal to ${four} "${three <= four}"`);

//Task-10
let onenum = 28;
let twonum = "28";
console.log(onenum == twonum)
console.log(onenum === twonum)

//Activity 4: Logical Operators 
//Task-11
let conditionOne = 20;
let conditionTwo = 30;
console.log(conditionOne >= 15 && conditionTwo <= 35)

//Task-12
let arrOne = 20;
let arrTwo = 30    
console.log(arrOne >= 25 || arrTwo <= 30);

//Task-13
let isLoggedIn = true
console.log(!isLoggedIn);

//Activity 5: Ternary Operator 
//Task-14
let age = 20;
let beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); 