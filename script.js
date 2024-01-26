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