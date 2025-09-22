let topContainer = document.querySelector(".top-half-container")
let bottomContainer = document.querySelector(".bottom-half-container")
let display = document.querySelector(".display")

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function add(a, b) {
 return a + b;
}

function subtract(a, b) {
 return a - b;
}

function multiply(a, b) {
 return a * b;
}

function divide(a, b) {
 return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operate(num1, num2, operator) {
  if (operator === "-") {
    return subtract(num1, num2)
  }

  else if (operator === "+") {
    return add(num1, num2)
  }

  else if (operator === "/") {
    return divide(num1, num2)
  }

  else if (operator === "*") {
    return multiply(num1, num2)
  }
}

topContainer.addEventListener("click", (e) =>{
  if (numbers.includes( +e.target.textContent)) {
    display.textContent = e.target.textContent;
  }
})