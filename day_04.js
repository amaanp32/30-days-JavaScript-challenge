//Loops 
//Activity 1: For Loop
//Task-1 numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}

//Task-2 multiplication table of 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${i*5}`);
    
}

//Activity 2: While Loop
//Task-3 The sum of numbers from 1 to 10
let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;
    num++;
}
console.log(`The sum of numbers from 1 to 10 is: ${sum}`);

//Task-4 Print numbers from 10 to 1
let t = 10;

while (t >= 1) {
    console.log(t);
    t--;
}

//Activity 2: Do...While Loop
//Task-5 Print numbers form 1 to5 using do...while Loop
let j = 1;
do {
    console.log(j);
    j++
} while (j <=5);

//Task-6 Calculate the factorial of a number using do...while Loop
let number = 5; 
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= number);

console.log(`The factorial of ${number} is: ${factorial}`);

//Activity 4: Nested Loops
//Task - 7 Print Pattern
let n = 5; 

for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}

//Activity 2: Loop Control Statments
//Task - 8 print Numbers from 1 to 10 but skip the number 5
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

//Task - 9 print Numbers from 1 to 10 but stop the loop at number 7
for (let i = 1; i < 10; i++) {
    if (i == 7) {
        console.log(`7 Detected`);
        break;
    }
    console.log(i);
}