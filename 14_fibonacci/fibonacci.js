const fibonacci = function(z) {

    z = Number(z); 

    if(z < 0) {
        return "OOPS"; 
    } else if(z === 0) {
        return 0; 
    } else if(z === 1) {
        return 1; 
    }
    
    let a = 0; 
    let b = 1; 
    let c = 0; 

    for(let i = 1; i < z; i++) {
    
        c = a + b; 

        a = b; 
        b = c; 
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
