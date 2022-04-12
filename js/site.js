// Step One, get the information (controller, accept requests)
function getValues() {
    // First get the fizz, buzz, start, and end values from user
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // convert input strings to ints
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // verify that numbers are all integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) &&
        Number.isInteger(startValue) && Number.isInteger(endValue)) {

        // calculate fizzbuzz
        let fbValues = fizzBuzzA(startValue, endValue, fizzValue, buzzValue);

        // display the value
        displayValues(fbValues);
    } else { // display an alert if anything other than integers is entered
        alert("Try entering a number instead. I don't like to calculate fizzbuzz with letters and words.");
    }
}

// business logic layer - Model
// if statements
function fizzBuzzA(start, end, fizz, buzz) {
    // create an array
    let fbValues = [];

    // iterate over the array and push values
    for (let i = start; i <= end; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            fbValues.push('FizzBuzz');
        } else if (i % fizz == 0) {
            fbValues.push('Fizz');
        } else if (i % buzz == 0) {
            fbValues.push('Buzz');
        } else {
            fbValues.push(i);
        }
    }
    return fbValues;
}

// use switch case
function fizzBuzzB(start, end, fizz, buzz) {
    let fbValues = [];

    let isFizz = false;
    let isBuzz = false;

    for (i = start; i <= end; i++) {
        isFizz = (i % fizz == 0);
        isBuzz = (i % buzz == 0);

        switch(true) {
            case isFizz && isBuzz:{
                fbValues.push('FizzBuzz');
                break;
            }
            case isFizz:{
                fbValues.push('Fizz');
                break;
            }
            case isBuzz:{
                fbValues.push('Buzz');
                break;
            }
            default: {
                fbValues.push(i);
                break;
            }
        }
    }
}

// use a ternary function
function fizzBuzzC (start, end, fizz, buzz){
    let fbValues = [];

    for (let i= start; i <= end; i++) {
         let value = ((i%fizz ==0 ? 'Fizz' : '') + (i%buzz ==0 ? 'Buzz' : '') || i);
         fbValues.push(value);
    }
}

// Final Step, display the information (view, displays stuff on screen)
function displayValues(fizzBuzzValues) {

    // clear previous results when button is pressed more than once
    clearResults();

    // get element where we want results to print
    element = document.getElementById("results");

    // iterate over array and create div elements, add css styling with classes
    // and append to the element we want to display
    for (let index = 0; index < fizzBuzzValues.length; index++) {

        let item = document.createElement("div");
        item.classList.add("col");

        item.innerHTML = fizzBuzzValues[index];

        if (fizzBuzzValues[index] == 'FizzBuzz') {
            item.classList.add('fizzbuzz');
        } else if (fizzBuzzValues[index] == 'Fizz') {
            item.classList.add('fizz');
        } else if (fizzBuzzValues[index] == 'Buzz') {
            item.classList.add('buzz');
        }

        element.appendChild(item);
    }
}

// clear the results
function clearResults() {
    document.getElementById("results").innerHTML = '';
}