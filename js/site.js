// Step One, get the information (controller, accept requests)
function getValues() {
    // First get the fizz and buzz values from user
    fizzValue = document.getElementById("fizzValue").value;
    buzzValue = document.getElementById("buzzValue").value;

    // Call display values and pass fizz and buzz values to function
    displayValues(fizzValue, buzzValue);
}



// Final Step, display the information (view, displays stuff on screen)
function displayValues(fizz, buzz) {
    // convert input strings to ints
    let fizzValue = parseInt(fizz);
    let buzzValue = parseInt(buzz);

    // clear previous results when button is pressed more than once
    clearResults();

    // get element where we want results to print
    element = document.getElementById("results");

    // display a list of numbers from 1 to 100
    // write a for loop to display values
    for (let i = 1; i <= 100; i++) {
        // create a new div element to be added to results
        let item = document.createElement("div");

        if (i % fizz == 0 && i % buzz == 0) {
            item.innerHTML = 'FizzBuzz';
        } else if (i % fizz == 0) {
            item.innerHTML = 'Fizz';
        } else if (i % buzz == 0) {
            item.innerHTML = 'Buzz';
        } else {
            item.innerHTML = i;
        }

        // add class to div element
        item.classList.add("col");

        // add element to results
        element.appendChild(item);
    }

    // for each number test if divisible by fizz and buzz
    // if true, replace number with 'FizzBuzz'

    // for each number test if divisible by fizz
    // if true, replace number with 'Fizz'

    // for each number test if divisible by buzz
    // if true, replace number with 'Buzz'
}

function clearResults() {
    document.getElementById("results").innerHTML = '';
}