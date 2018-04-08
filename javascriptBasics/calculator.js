var input1 = document.getElementById('txtInput1');
var input2 = document.getElementById("txtInput2");
var inputOp = document.getElementById('txtOperator');
var operand1;
var operand2;



var del = function(){
    if(!operand1){
        var val = input1.value;
        input1.value = removeChar(val);
    }
    else{
        var val = input2.value;
        input2.value = removeChar(val);
    }
}

function removeChar(val) {
    if (val) {
    //if more than one number exists then 
    //return everything between 0th and last but one - exclusive
    return val.substring(0, val.length - 1);
    }
    else{
    return "";
    }
}

var reset = function(){

    input1.value = '';
    input2.value = '';
    inputOp.value = '';
    operand1 = null;
    operand2 = null;
}

function onClick(event){
    var char = event.target.innerText;
    if (isOperator(char)){
        //if first input exist
        if (input1.value) {
        //assign input1.value to var operand1
        operand1 = input1.value;
        //assign inputOp.value to char
        inputOp.value = char;
        }
    }
    else {
        //if the user already entered the first operand
        if (operand1) {
        //then update and keep adding to the 
        //second input with whatever the value the user entered
        input2.value = input2.value + char;
        operand2 = input2.value;
        }
        else {
        //else update 
        input1.value = input1.value + char;
        }
    }
}
function onDecimal() {
    if (operand1) {
        var val = input2.value;
        if (val.indexOf('.') > -1){
             input2.value += '.';
        }
    }    
    else {
        var val = input1.value;
        if (val.indexOf('.') > -1){
             input1.value += '.';
        }
    }    
}

function isOperator(char){

    if( char === '+' || char ==='-' || char === '/' || char === '*'){
        return true;
    }
    else{
        return false;
    }
}
var calculate = function(){
    var op1 = parseInt(operand1);
    var op2 = parseInt(operand2);
    var operator = inputOp.value;
    reset();
    input1.value = finalAnswer(op1, op2, operator);
}
var finalAnswer = function(op1, op2, operator){
    switch (operator){
        case "+":
        return op1 + op2;
        break;
        case "-":
        return op1- op2;
        break;
        case "/":
        if(op2 === 0){
            alert("You cannot divide a number into 0");
            return 0;
        }
        else{
            var answer = op1 / op2;
            if(Number.isInteger(answer)){
                return answer.toFixed(2);
            }
        }
            break;
        default:
        return 0; 
    }
}
