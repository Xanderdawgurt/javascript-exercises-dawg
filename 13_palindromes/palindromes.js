const palindromes = function (string) {
    string = string.toLowerCase(); 
    string = string.replace(/[^a-z0-9]/g, "");

    const arr = string.split(''); 
    const arrTwo = [...arr];
    const reversedArr = arrTwo.reverse(); 

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== reversedArr[i]) {
            return false;
        }
    }
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
