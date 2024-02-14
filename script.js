const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne/numTwo;

let firstNum;
let operator;
let secondNum;

const operate = function(numOne, numTwo, operator) {
  switch(operator) {
    case '+':
      add(numOne,numTwo);
      break;
    case '-':
      subtract(numOne,numTwo);
      break;
    case '*':
      multiply(numOne,numTwo);
      break;
    case '/':
      divide(numOne,numTwo);
      break;
    default:
      // code block
    } 
}

const numberBtns = document.querySelectorAll('.number');

numberBtns.forEach(function(number) {
  number.addEventListener("mousedown", function (event) {
    event.target.style.backgroundColor = "hsl(189, 32%, 83%)";
  });
  number.addEventListener("mouseup", function(event) {
    event.target.style.backgroundColor = "hsl(188, 45%, 78%)";
    clear();
  });
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(function(operator) {
  operator.addEventListener("mousedown", function (event) {
    event.target.style.backgroundColor = "hsl(46, 74%, 92%)";
  });
  if (operator.id === "equals") {
    operator.addEventListener("mouseup", (event) => {
      clear();
    });
  };
});

let displayValue = '';
const displayDiv = document.getElementById("display");
function display(currentdiv) {
  let divContents = document.getElementById(currentdiv).innerHTML;
  displayValue = divContents;
  displayDiv.textContent = displayValue;
  }


clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  displayValue = '';
  displayDiv.textContent = 0;
});

clear = function() {
  operatorBtns.forEach(function(operator) {
    operator.style.backgroundColor = "hsl(168, 69%, 84%)";
    });
  };