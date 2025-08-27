// const sumAll = function(arr) {
//     const sum = arr.reduce((total, currentItem) => {
//         return total + currentItem;
//     }, 0);
// };

// I need a way to take two ints and fill in the 
// space between them 


// const sumAll = function(num1, num2) {
//     let betweenInts = (num2 - num1) - 1; 
//     let i = num1; 
//     while (betweenInts > 0) {
//         i++; 
//     }
//     arr.reduce((total, currentItem) => {
//         return total + currentItem; 
//     }, 0);

// }

 const sumAll = function(num1, num2) {
    let sum = num1 + num2;
    let betweenInts = (num2 - num1)
    if (betweenInts < 0) {
        betweenInts * -1;
    }
    let i = 0;
    betweenInts -= 1;

    if (num2 > num1) {
        let num = num1;
        while (i < betweenInts) {
            num++;
            sum += num;
            i++; 
        }
    } else {
        let num = num2;
        while (i < betweenInts) {
            num++;
            sum += num;
            i++;
        }
    }
    return sum;
 }
// Do not edit below this line
module.exports = sumAll;
