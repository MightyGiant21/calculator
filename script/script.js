let numbers = document.querySelectorAll(".number");
let operand = document.querySelectorAll(".operand");
let mainNumber = document.querySelector(".mainNumber");
let secondaryNumber = document.querySelector(".secondaryNumber");

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', updateNumbers);
} 

for (i = 0; i < operand.length; i++) {
    operand[i].addEventListener('click', decodeOperand);
}

let arg0 = [];
let arg1 = [];
let num0 = 0;
let num1 = 0;
let result = 0;

let hasCalculated = false;
let add = false;
let sub = false;
let divide = false;
let multiply = false;

function updateNumbers() {
    if (!hasCalculated) {
        arg0.push(this.value);
        num0 = arg0.join('');
        showCurrentNumber();
    } else {
        arg1.push(this.value);
        num1 = arg1.join('');
        showCurrentNumber(); 
    }
}

function addition() {
    hasCalculated = true;
    add = true;
}

function subtraction() {
    hasCalculated = true;
    sub = true;
}

function division() {
    hasCalculated = true;
    divide = true;
}

function multiplication() {
    hasCalculated = true;
    multiply = true;
}

function showCurrentNumber() {
    if (!hasCalculated) {
        mainNumber.textContent = parseInt(num0);
    } else {
        secondaryNumber.textContent = parseInt(num0);
        mainNumber.textContent = parseInt(num1);
    }
}

function showResult() {
    if (add) {
        result = parseInt(num0) + parseInt(num1);
    } else if (sub) {
        result = parseInt(num0) - parseInt(num1);
    } else if (divide) {
        result = parseInt(num0) / parseInt(num1);
    } else if (multiply) {
        result = parseInt(num0) * parseInt(num1);
    }

    mainNumber.textContent = result;
}

function resetCalculator() {
    arg0 = [];
    arg1 = [];
    num0 = 0;
    num1 = 0;
    result = 0;
    hasCalculated = false;
    add = false;
    sub = false;
    divide = false;
    multiply = false;
    mainNumber.textContent = 0;
    secondaryNumber.textContent = 0;
}

function decodeOperand() {
    switch (this.value) {
        case "+":
            addition();
            break;
        case "-":
            subtraction();
            break;
        case "*":
            multiplication();
            break;
        case "/":
            division();
            break;
        case "=":
            showResult();
            break;
        case"AC":
            resetCalculator();
            break;
    }
}