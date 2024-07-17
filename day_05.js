//Functions 
//Activity 1: Function Declaration
//Task-1 Check if a number is odd or even
function task1(num) {
    if (num % 2 == 0) {
        console.log(`"${num}" Is a even number`);
    } else {
        console.log(`"${num}" Is a odd number`); 
    }
} 
task1(5)

// Task-2 Calculate the square of a number
function task2(num) {
    return num*num
}
console.log(task2(12));

//Activity 2: Function Expression
// Task-3 Find the maximum of two numbers.
let task3 = function(a,b){
    if (a > b) {
        return a;
    }else{
        return b;
    }
};
console.log(`${task3(12,15)}: Is Greater`);

//Task-4 Concatenate two strings.
function task4(fName , lName) {
    return fName + lName
}
console.log(task4("Amaan"," Patel"));

//Activity 3: Arrow Functions 
// Task-5 Arrow function to caclulate the sum of two.
const task5 = (one,two) => (one + two);
console.log(task5(2,2));

//Task-6 Arrow Function to check if a string contains specific character 
const task6 = (str) =>{
    return str.includes("Patel");
};
console.log(task6("Amaan Patel"))

//Activity 4: Function Parameters and default Values 
// Task-7 Write a function that takes two parameters and returns their product. provide a default value for the second parameter
const task7 = function (product1,product2 = 5) {
    return product1 + product2
};
console.log(task7(10,));

//Task 8: Write a function that takes a person's name and age and returns a greetting message. Provide a default value for the age.
const task8 =  (name, age = 18)=> {
    return `Hello, ${name} You are ${age} years old.`
}
console.log(task8("Amaan Patel" , 22));

//Activity 5: Higher-Order Functions
//Task-9 Write a higher-order function that takes a function and a number, and calls the function that many times
const task9 = (functon , n) =>{
    for (let i = 0; i <= n; i++) {
        functon()
    }
}
function hello() {
    console.log("Hello I am Amaan ");
}

task9(hello , 5)

//Task-10 function that takes two function and a value, applies the first function to the value, and then applies the second to the result
const task10 = (func1, func2, value) => {
    const fromFirstFunc = func1(value);
    const finalValue = func2(fromFirstFunc);
    return finalValue;
}
function multipy(a) {
    return a * 2
}
function add10(a) {
    return a + 10
}
const initialValue = 50;
const result = task10(multipy,add10,initialValue)
console.log(result);