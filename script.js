// add result for value for get result:
let result = document.getElementById("result");
function appendToResult(value) {
    result.value += value;
}

//appending a number for input:
function appendNumber(number) {
    result.value += number;
}
//result value for inputoperator to the result value;
function appendOperator(operator) {
    result.value += operator;
}
// append result value in decimal point:
function appendDecimal() {
    if (!result.value.includes(".")) {
        result.value += ".";
    }
}
// clear the result for input values:
function clearResult() {
    result.value= "" ;
}
// delete last character of input or in result:
function deleteLastChar() {
    result.value = result.value.slice(0, -1);
}
//display the result and error if:
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value= "Error";
    }
}
