const min = function(numbers) {
  let smallest = numbers[0]; // smallest is the first number in the array
  for (let i = 1; i < numbers.length; i++) {// loops through the array where the limit is set to the dynamic length of each array
    if (numbers[i] < smallest) {// checks each number in index and compares if its less then our first number
      smallest = numbers[i];// changes smallest variable to equal the lowest number in array
    }
  }
  return smallest;
};

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs ${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);

/*
const min = function(numbers) {
  const order = numbers.sort((a, b) => a - b);
  return order[0];
};
*/