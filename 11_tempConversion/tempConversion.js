const convertToCelsius = function(fah) {
  const realNumber = (fah - 32) * (5/9); 
  const roundedNumber = Math.round(realNumber * 10) / 10; 
  return roundedNumber;
};

const convertToFahrenheit = function(cel) {
  const realNumber = (cel * 1.8) + 32;
  const roundedNumber = Math.round(realNumber * 10) / 10;
  return roundedNumber; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
