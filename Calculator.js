console.log('connected')

function add(Num1, Num2) {
    console.log(`the total is: ${Num1 + Num2}`)
}

function subtract(Num1, Num2) {
    console.log(`the total is: ${Num1 - Num2}`)
}

function divide(Num1, Num2) {
    console.log(`The total is:  ${Num1 / Num2}`)
}

function multiply(Num1, Num2) {
    console.log(`the total is: ${Num1 * Num2}`)
}


function operate(Num1, Num2, Operator) {
    if (Operator === '+')
        add(Num1, Num2)
    else if (Operator === '-')
        subtract(Num1, Num2)
    else if (Operator === '*')
        multiply(Num1, Num2)
    else if (Operator === '/')
        divide(Num1, Num2)
    else {
        console.log('Invalid operator')
    }
}


divide(5, 5);
add(1, 0);
subtract(3, 2);
multiply(1, 1);