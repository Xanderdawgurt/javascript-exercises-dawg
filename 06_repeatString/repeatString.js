const repeatString = function(str, num) {
    let i = 0; 
    let string = ""
    while (i < num) {
        string += str; 
        i++;
    }
    return string;
};

console.log(repeatString('bobs', 60));

// Do not edit below this line
module.exports = repeatString;
