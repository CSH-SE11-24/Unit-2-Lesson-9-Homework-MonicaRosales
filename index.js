// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let num1 = prompt("Enter a number")
parseInt(num1)
// Prompt the user for another number that is bigger than the first number and cast it to a number
let num2 = prompt("Enter another number that is greater than the first")
parseInt(num2)
// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number

for(let i = num1; i <= num2; i++){
  console.log(i)
}

// PART 2: Averaging an array
// Create an array of numbers 
let nums = [1, 2, 3, 4, 5]

// Write a for loop that calculates the sum of the elements 
let sum = 0

for (let x = 0; x < nums.length; x++){
  sum = sum + nums[x]
}

console.log(`The sum of all numbers in this array is ${sum}.`)

// Using the sum, calculate the average of all the elements (sum divided by the length of the array)

let average = sum / nums.length

console .log("The average of the numbers in this array is", average)