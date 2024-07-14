// 30 Days - JavaScript Challenge

// Day-1 

//Activity 1: Varialble Declaration
// Task-1 
var num = 25;
console.log(num);

// Task-2
let str = "Amaan";
console.log(str);


//Activity 2: Consatnt Declaration
// Task-3
const check = true;
console.log(check);

//Activity 3: Data Types
// Task-4
var a = 45;
var b = "Patel";
var c = true;
var d = {name: "Amaan Patel", Id: 1210};
var e = ["car", "bike", "cycle"];
console.log(typeof(a), typeof(b), typeof(c), typeof(d), typeof(e));

//Activity 4 : Reassigning Variable
// Task-5
let game = "Valorant"
console.log(`Initial Value: ${game}`)
game = "counter-strike"
console.log(`Re-assign Value: ${game}`);


// Activity 5 : Understanding const 
// Task-6
const movie = "Inception";
console.log(`Initial value: ${movie}`);
// movie = "Intestellar"; //  The value of a constant can't be changed. Because it is block-scoped local variables.
console.log(`Re-assign value: ${movie}`);


//----------------------------Feature Request--------------------------------------------------------

// Task-7
var number = 25; 
console.log(`${number} This is a Type of: ${typeof(number)}`);

var string = "Chai aur code"; 
console.log(`${string} This is a Type of: ${typeof(string)}`);

var boolean = true; 
console.log(`${boolean} This is a Type of: ${typeof(boolean)}`);

var obj = {isloogedin: true, userid: 1205}; 
console.log(`${obj} This is a Type of: ${typeof(obj)}`);

var arr = ["Apple", "Banana", "Kivi"]; 
console.log(`${arr} This is a Type of: ${typeof(arr)}`);

// Task-8
let place = "Mumbai"
console.log(`Initial Value: ${place}`)
place = "Bengaluru" // It can be changed
console.log(`Re-assign Value: ${place}`);

// 2
const state = "Maharashtra"
console.log(`Initial Value: ${state}`)
state = "Karnataka" // The value of a constant can't be changed. Because it is block-scoped local variables.
console.log(`Re-assign Value: ${state}`);
