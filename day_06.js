//Arrays 
//Activity 1: Array Creation and Access
//Task-1 Create an array of number from 1 to 5 
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//Task-2 Access the first and last elements 
console.log(`The first element of the array is "${arr[0]}"`)
console.log(`The last element of the array is "${arr[arr.length - 1]}"`)


//Activity 1: Array Methods (Basic)
//Task-3 Use the Push Method to add a new number to the end
arr.push(6);
console.log(`When we 'push' the element '6' to our array, the array is updated to "${arr}"`)

//Task-4 Use the Pop Method to remove last element 
arr.pop();
console.log(`When we 'pop' the last element from our newly updated array, we get the original array "${arr}"`) 

//Task-5 Use the Shift Method to remove first element
arr.shift();
console.log(`When we 'shift' the first element from our original array, we get the following array "${arr}"`);

//Task-6 Use the Unshift Method to add a new number to the beginning
arr.unshift(12)
console.log(`When we 'unshift' the first elements from our resulting array by 12, we get the following array "${arr}"`);


//Activity 3: Array Methods (Intermediate)
//Task-7 Use the map method to create a new array where each number is doubled 
let newArr = [1, 2, 3, 4, 5, 6];
let number = newArr.map(num => num * 2);
console.log(number," is the doubled array of ",newArr);

//Task-8 Use the filter method to create a new array with only even numbers
let evenNum = newArr.filter(num => num % 2 === 0 );
console.log(evenNum," is the even array filtered from ",newArr);

//Task-9 Use the reduce method to calculate the sum of all numbers 
let sum = newArr.reduce((acc, currValue) => acc + currValue, 0);
console.log("The sum of all elements of " , newArr , "is" , sum);


//Activity 4: Array Iteration
//Task-10 Use a for loop to iterate over the array
let forArr = ["India", "Japan", "China", "Tokyo", "France"];
for (let i = 0; i < forArr.length; i++) {
    console.log(forArr[i]);
}

//Task-10 Use a forEach loop to iterate over the array
forArr.forEach(element => (console.log(element.toUpperCase())));


//Activity 5: Multi-dimensional Arrays
//Task-11 Create a two-dimensional array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

//Task-12 Access and log a specific element from the two-dimensional array
const specificElement = matrix[2][2]; 
console.log(specificElement);
