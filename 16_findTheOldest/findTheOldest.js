const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {

        if(oldest.yearOfDeath === undefined) {
            oldest.yearOfDeath = 2025;
        }

        if(current.yearOfDeath === undefined) {
            current.yearOfDeath = 2025;
        }


        const oldestAge = (oldest.yearOfDeath - oldest.yearOfBirth); 
        const currentAge = (current.yearOfDeath - current.yearOfBirth); 

        if(currentAge > oldestAge) {
            return current;
        } else {
            return oldest;
        } 

    },); 
};

// Do not edit below this line
module.exports = findTheOldest;
