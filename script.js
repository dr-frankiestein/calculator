const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne/numTwo;

let firstNum;
let operator;
let secondNum;

const operate = function(numOne, numTwo, operator) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  switch(operator) {
    case "+":
      return add(numOne,numTwo);
      break;
    case "-":
      return subtract(numOne,numTwo);
      break;
    case "*":
      return multiply(numOne,numTwo);
      break;
    case "/":
      return divide(numOne,numTwo);
      break;
    default:
      return "ERROR";
    } 
}

numberOne = document.getElementById('one');
const originalNumberBG = getComputedStyle(numberOne).backgroundColor;

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(function(number) {
  number.addEventListener("mousedown", function (event) {
    event.target.style.backgroundColor = "hsl(189, 32%, 83%)";
    setTimeout(function() {
      event.target.style.backgroundColor = originalNumberBG;
    }, 200);
  });
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(function(operator) {
  operator.addEventListener("mousedown", function (event) {
    event.target.style.backgroundColor = "hsl(46, 74%, 92%)";
    let opVal = event.target.innerHTML;
    if (displayValue !== "") vals.push(displayValue);
    vals.push(opVal);
    operator.addEventListener("mouseup", (event) => {
      if (vals.length >= 3) {
        numOne = takeFirstValue(vals);
        // numOne = vals.splice(0,1);
        operation = takeFirstValue(vals);
        numTwo = takeFirstValue(vals);
        result = operate(numOne, numTwo, operation);
        // displayValue = result;
        displayDiv.textContent = result;
        vals.unshift(result);
      };
    });
    resetDisplayValue(); 
  });
  // if (operator.id === "equals") {
  //   operator.addEventListener("mouseup", (event) => {
  //     clearShading();
  //   });
  // };
});

let displayValue = '';
let vals = [];
const displayDiv = document.getElementById("display");
function display(currentdiv) {
  let divContents = document.getElementById(currentdiv).innerHTML;
  displayValue += divContents;
  displayDiv.textContent = displayValue;
  }

equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener("click", () => {
  vals.push(displayValue);
  numOne = takeFirstValue(vals);
  // numOne = vals.splice(0,1);
  operation = takeFirstValue(vals);
  numTwo = takeFirstValue(vals);
  result = operate(numOne, numTwo, operation);
  // displayValue = result;
  displayDiv.textContent = result;
  vals.unshift(result);
  clearShading();
  resetDisplayValue(); 
})

let originalOpsBG = getComputedStyle(equalsBtn).backgroundColor; // Store original color (red)
equalsBtn.addEventListener("mousedown", function(event) {
  event.target.style.backgroundColor = "hsl(46, 74%, 92%)";
  setTimeout(function(){
    event.target.style.backgroundColor = originalOpsBG;  // Change the color back to the original
  }, 200);
});

const miscBtns = document.querySelectorAll('.misc');

miscBtns.forEach(function(misc) {
  misc.addEventListener("mousedown", function(event) {
    const originalMiscBG = getComputedStyle(misc).backgroundColor;
    event.target.style.backgroundColor = "hsl(46, 84%, 86%)";
    setTimeout(function(){
      event.target.style.backgroundColor = originalMiscBG;
    }, 200);
  });
});


const takeFirstValue = function(array) {
  lilArray = array.splice(0,1);
  return lilArray[0];
};

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  clearAllVals();
  clearShading();
});

const clearShading = function() {
  operatorBtns.forEach(function(operator) {
    operator.style.backgroundColor = "hsl(168, 69%, 84%)";
    });
  };

const resetDisplayValue = function() {
  displayValue = '';
};

const clearAllVals = function() {
  vals = [];
  resetDisplayValue();
  displayDiv.textContent = 0;
}

function isNotNumber(value) {
  return typeof value !== 'number';
}