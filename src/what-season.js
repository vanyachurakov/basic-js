const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date = 0) {
  const seasons = ['winter', 'spring', 'summer', 'autumn', 'winter'];
  if (date == 0) {
    return 'Unable to determine the time of year!';
  } else {
    try {
      let month = date.getMonth();
      return seasons[Math.floor((month + 1) / 3)];
    } catch (e) {
      throw Error;
    }
  }
};

// console.log(getSeason(new Date(2025, 0, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 1, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 2, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 3, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 4, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 5, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 6, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 7, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 8, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 9, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 10, 22, 23, 45, 11, 500)));
// console.log(getSeason(new Date(2025, 11, 22, 23, 45, 11, 500)));
