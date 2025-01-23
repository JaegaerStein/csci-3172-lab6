function areaCircle(){
    const radius = 6;

    const pi = 3.14159265358979323846;

    return (pi * radius * radius);
}

let number1 = 10;
let number2 = 15;
function arithmetic(number1, number2){
    return {
        addition: number1+number2, 
        subtraction: number1-number2, 
        multiplication: number1*number2,
        division: number2/number1
    };
}

let width = 15;
let length = 20;

function areaRectangle(width, length){

    return length * width;
}

console.log(areaCircle());        
console.log(arithmetic(number1, number2)); 
console.log(areaRectangle(width, length));

//A. The const variable has a block scope, meaning it can only be accessed within the block ({}) that it is defined inside of.
//B. The let and const keywords were added to javascript ES6 in 2015. 
//found here: https://www.w3schools.com/js/js_let.asp#:~:text=Before%20ES6%20(2015)%2C%20JavaScript,JavaScript%20keywords%3A%20let%20and%20const%20.