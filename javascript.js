let topContainer = document.querySelector(".top-half-container")
let bottomContainer = document.querySelector(".bottom-half-container")
let display = document.querySelector(".display")
let equalButton = document.querySelector("#equal-button")
let clearButton = document.querySelector("#clear-button")

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let operators = ["+", "-", "*", "/"]
let tempArr = []
let inputOperator = false;
let displayDigitsArray;

function add(a, b) {
 return (a + b);
}

function subtract(a, b) {
 return (a - b);
}

function multiply(a, b) {
 return (a * b);
}

function divide(a, b) {
 return (a / b).toFixed(2);
}

let firstNumber = "";
let secondNumber = "";
let operator = "";

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
  if (numbers.includes(+e.target.textContent) 
     && inputOperator === false) {
    tempArr.push(e.target.textContent)
    display.textContent = tempArr.join("");
    firstNumber = display.textContent;
    displayDigitsArray = display.textContent.split("")
    if (displayDigitsArray.length > 20){
      display.textContent = "Error press clear";
      inputOperator = "broken"
    }
  }

  if (operators.includes(e.target.textContent) 
     && firstNumber !== undefined
     && (inputOperator === false || inputOperator === "pending") ){
    display.textContent += ` ${e.target.textContent} `;
    inputOperator = true;
    tempArr = [];
    operator = e.target.textContent;
    displayDigitsArray = display.textContent.split("")
    if (displayDigitsArray.length > 20){
      display.textContent = "Error press clear";
      inputOperator = "broken"
    }
  }

  if (numbers.includes(+e.target.textContent)
      && inputOperator === true){
    tempArr.push(e.target.textContent)
    display.textContent += tempArr.join("");
    secondNumber += tempArr;
    tempArr = [];
    displayDigitsArray = display.textContent.split("")
    if (displayDigitsArray.length > 20){
      display.textContent = "Error press clear";
      inputOperator = "broken"
    }
  }
})

equalButton.addEventListener("click", (e) => {
  if (firstNumber !== "" && secondNumber !== ""
     && inputOperator === true){
    display.textContent = operate(+firstNumber, +secondNumber, operator);
    inputOperator = "pending";
    firstNumber = display.textContent;
    secondNumber = "";
    displayDigitsArray = display.textContent.split("")
    if (displayDigitsArray.length > 20){
      display.textContent = "Error press clear";
      inputOperator = "broken"
    }
  }
})

clearButton.addEventListener("click", (e) => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  inputOperator = false;
  display.textContent = '';
  tempArr = [];
})



