let input1 = document.getElementById('input')
let firstNum = 0;
let secondNum = 0;
let operation;

let placeholder = document.querySelector('#placeholder')

let pluss = document.querySelector('#pluss');
let minus = document.querySelector('#minus');
let multiply = document.querySelector('#mp-ly');
let divide = document.querySelector('#divide');
let result = document.querySelector('#result');
let clear = document.querySelector('#clear');


// Clear button and operation

clear.addEventListener('click', clearResult);

function clearResult() {
    placeholder.textContent = 'Cleared';
}

// Setting operation to + and setting first number to variable
pluss.addEventListener('click', plussSign);

function plussSign() {
    firstNum = input1.value;
    input1.value = '';
    operation = '+';
}

// Getting and displaying a result
result.addEventListener('click', gettingResult);

function gettingResult() {
    secondNum = input1.value;
    if (operation === '+') {
        let final = parseInt(firstNum, 10) + parseInt(secondNum, 10);
        final.toString();
        placeholder.textContent = final;
    }
}





