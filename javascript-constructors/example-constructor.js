/* Define a function named ExampleConstructor with no parameters and an empty code block. */
function ExampleConstructor() {

}
/* Log the value of the prototype property of the ExampleConstructor function to the console. */
console.log('value of ExampleConstructor: ', ExampleConstructor.prototype);

/* Log the typeof the prototype property of the ExampleConstructor to the console. */
console.log('type of ExampleConstructor: ', typeof ExampleConstructor.prototype);

// Object.setPrototypeOf(ExampleConstructor, ExampleConstructor.prototype);
/* Call the ExampleConstructor function with new */
/* assign the return value to a variable. Log that variable to the console.. */
var myExConstructor = new ExampleConstructor();
console.log('value of myExConstructor: ', myExConstructor);

/* Use the instanceof operator to check if the value of your variable is indeed an instance of ExampleConstructor */
/* assign the result of that expression to another variable. Log that variable to the console. */
var instanceOfExampleConstructor = (myExConstructor instanceof ExampleConstructor);

console.log('is myExConstructor instance of ExampleConstructor: ', instanceOfExampleConstructor);
// expected output: true
