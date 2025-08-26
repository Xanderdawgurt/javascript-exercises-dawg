

const reverseString = function(word) {
    const arr = word.split('');
    const reversedArr = arr.reverse();
    return reversedArr.join(''); 
};
console.log(reverseString(blooper));
// Do not edit below this line
module.exports = reverseString;
