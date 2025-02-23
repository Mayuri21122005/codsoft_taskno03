const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

// Function to update the display
function updateDisplay() {
    display.textContent = currentInput || '0';
}

// Function to handle number input
function handleNumber(number) {
    if (currentInput === '0' || currentInput === '') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// Function to handle operator input
function handleOperator(inputOperator) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculate();
    }

    operator = inputOperator;
    previousInput = currentInput;
    currentInput = '';
}

// Function to calculate the result
function calculate() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Add event listeners to the buttons
document.getElementById('clear').addEventListener('click', clearDisplay);

document.getElementById('divide').addEventListener('click', () => handleOperator('/'));
document.getElementById('multiply').addEventListener('click', () => handleOperator('*'));
document.getElementById('subtract').addEventListener('click', () => handleOperator('-'));
document.getElementById('add').addEventListener('click', () => handleOperator('+'));

document.getElementById('equals').addEventListener('click', calculate);

document.getElementById('0').addEventListener('click', () => handleNumber('0'));
document.getElementById('1').addEventListener('click', () => handleNumber('1'));
document.getElementById('2').addEventListener('click', () => handleNumber('2'));
document.getElementById('3').addEventListener('click', () => handleNumber('3'));
document.getElementById('4').addEventListener('click', () => handleNumber('4'));
document.getElementById('5').addEventListener('click', () => handleNumber('5'));
document.getElementById('6').addEventListener('click', () => handleNumber('6'));
document.getElementById('7').addEventListener('click', () => handleNumber('7'));
document.getElementById('8').addEventListener('click', () => handleNumber('8'));
document.getElementById('9').addEventListener('click', () => handleNumber('9'));
document.getElementById('decimal').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
});
