//Activity 1: If-else Statments
//Task-1
let num = -20;
if (num > 0) {
    console.log(`Number is in Positive "${num}"`);
} else if (num < 0) {
    console.log(`Number is in Negative "${num}"`);
} else {
    console.log(`Number is Zero "${num}"`);
}

//Task-2
let age = 22;
if (age >= 18) {
    console.log(`You are eligible to vote`);
} else {
    console.log(`You are not-eligible to vote`);
}

//Activity 2: Nested if-Else Statements
//Task-3
let num1 = 110;  
let num2 = 250;
let num3 = 220;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(`Num1 is largest number "${num1}"`)
    }else{
        console.log(`Num3 is largest number "${num3}"`)
    }
}else{
    if (num2 > num3) {
        console.log(`Num2 is largest number "${num2}"`)
    } else {
        console.log(`Num3 is largest number "${num3}"`)
    }
}

//Activity 3: Switch case
//Task-4
let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    }
    console.log(day);

//Task-5
let score = 80;
switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 70:
        console.log("B");
        break;
    case score >= 50:
        console.log("C");
        break;
    case score >= 40:
        console.log("D");
        break;
    case score <= 33:
        console.log("F");
        break;
    default:
        console.log("Absent");
        break;
}

//Activity 4: Conditional (Ternary) Operator
//Task-6
let number1 = 5;
(number1%2 == 0)?console.log("Number is even"):console.log("Number is odd")

//Activity 5: Combining Coditions
//Task-7
let year = 2032;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        console.log("Not a Leap year");
    }else{
        console.log("Leap year");
    }
}else{
    if (year % 400 ==0) {
        console.log("Leap year");
    } else {
        console.log("Not a Leap year");
    }
}