const add = function(a, b) {
    let result = a + b; 
    return result; 
};

const subtract = function(a, b) {
    let result = a - b; 
    return result; 
};

const sum = function(array) {
    let result = array.reduce((acc, curr) => {
        return acc + curr; 
    }, 0);   
    return result; 
};

const multiply = function(array) {
    let result = array.reduce((acc, curr) => {
        return acc * curr; 
    }, 1);   
    return result; 
};

const power = function(a, b) {
    let result = 1; 
    for(let i = 0; i < b; i++) {
        result *= a; 
    } 
    return result; 
};

const factorial = function(a) {
    let arr = []; 
    for(let i = 1; (i - 1) < a; i++) {
    arr.push(i);
    }
    return arr.reduce((acc, curr) => acc * curr, 1); 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
