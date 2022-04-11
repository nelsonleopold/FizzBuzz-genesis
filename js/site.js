// Step One, get the information (controller, accept requests)
function getValues() {
    // First get the fizz and buzz values from user
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // convert input strings to ints
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // creates default values if nothing is input
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) &&
        Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // Call display values and pass fizz and buzz values to function
        // calculate fizzbuzz
        let fbValues = fizzBuzzA(startValue, endValue, fizzValue, buzzValue);

        // display the value
        displayValues(fbValues);
    } else {
        alert("Try entering a number instead. I don't like to calculate fizzbuzz with letters and words.");
    }
}

// business logic layer - Model
function fizzBuzzA(start, end, fizz, buzz) {
    // create an array
    let fbValues = [];

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

// Final Step, display the information (view, displays stuff on screen)
function displayValues(fizzBuzzValues) {

    // clear previous results when button is pressed more than once
    clearResults();

    // get element where we want results to print
    element = document.getElementById("results");

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

function clearResults() {
    document.getElementById("results").innerHTML = '';
}