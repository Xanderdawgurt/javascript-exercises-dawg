const removeFromArray = function(arr, num) {
    const index = arr.indexOf(num);
    const rm = arr.splice(index, 1);
    return arr; 
};

// Do not edit below this line
module.exports = removeFromArray;
