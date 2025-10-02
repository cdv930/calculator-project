//Arithmetic Functions
function addition(x,y){
    const z = x+y;
    return z;
};

function subtraction(x,y){
    const z = x-y;
    return z;
};

function division(x,y){
    
    const z = x/y;
    return z;
};

function multiplication(x,y){
    z = x*y;
    return z;
};

// display variables
let operandA = '';
let operandB = '';
let operator = null;
let displayValue ='';
let result = null;

// operate function
function operate(operandA,operandB,operator){
 x = Number(operandA);
 y = Number(operandB);

 if(y == 0 && operator == '/'){
    return 'Not Today Pal...'
 }
  else{  
 switch (operator) {
    case '+':
       return addition(x,y).toString();
    case '-':
        return  subtraction(x,y).toString();
    case '/':
        return division(x,y).toString();
    case '*':
        return multiplication(x,y);
        }
}
};

//DOM Manipulation

// Integer Button References & Event Listener Assignment
const display = document.getElementById('display');
const integerButtons = document.querySelectorAll('.integer');

integerButtons.forEach((integer)=>{
    integer.addEventListener('click',() => {
        displayValue += integer.value;
        display.textContent =displayValue;
    })
})

//Operation Button References & Event Listener
const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((operation)=>{
    
    operation.addEventListener('click',() => {
        
        if (operator == null){
            operandA = displayValue;
            operator = operation.value;
            display.textContent=  `${operator}`;
            displayValue = '';
        }
        else{
            operandB = displayValue;
            let result = operate(operandA,operandB,operator);
            display.textContent = result;
            operator = operation.value;
            operandA = result;
            displayValue='';
            result = '';
            operandB = '';
        }
    }) 
});

//Equals Button Reference & Event Listener

const equals = document.getElementById('equal');

equals.addEventListener('click',()=>{
    result = operate(operandA,displayValue,operator);
    display.textContent= result;

});

//Clear Button Reference & Event Listener

const clear = document.getElementById('clear');

clear.addEventListener('click',() => {
    operandA= '';
    operandB ='';
    displayValue ='';
    operator = null;
    result = null;
    display.textContent=displayValue;
})

//backspace ref + listener;
const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
   displayValue = displayValue.slice(0,-1);
    display.textContent = displayValue;
})