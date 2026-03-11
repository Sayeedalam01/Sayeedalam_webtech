let display = document.getElementById('display');
let currentInput = '';
let lastResult = '';

function appendNumber(number) {
    if (lastResult !== '') {
        clearDisplay();
        lastResult = '';
    }
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' && lastResult !== '') {
        currentInput = lastResult + operator;
        display.innerText = currentInput;
        lastResult = '';
    } else if (currentInput !== '' && !isOperatorLast()) {
        currentInput += operator;
        display.innerText = currentInput;
    }
}

function isOperatorLast() {
    const lastChar = currentInput[currentInput.length - 1];
    return lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/';
}

function clearDisplay() {
    currentInput = '';
    lastResult = '';
    display.innerText = '0';
}

function calculate() {
    if (currentInput === '') return;
    
    try {
        if (isOperatorLast()) {
            display.innerText = 'Error';
            return;
        }
        
        const result = eval(currentInput);
        
        if (!isFinite(result)) {
            display.innerText = 'Error';
            return;
        }
        
        lastResult = result.toString();
        display.innerText = lastResult;
        currentInput = '';
    } catch (error) {
        display.innerText = 'Error';
    }
}