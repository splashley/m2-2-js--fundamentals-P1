// Q1
// Write a function that accepts two integers and displays
// the greater one, using `console.log`

// Define the function
let largerNumber;
function max(num1, num2) {
    

    if (num1 > num2) {
        largerNumber = num1;
    }

    else {
        largerNumber = num2;
    }

}
max(12, 43);
console.log(`The greater number is ${largerNumber}`);

// Call the function
max(12, 43);
