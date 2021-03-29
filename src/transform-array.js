const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  const arrFunc = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  const arrFuncToCall = [
    discardNext(),
    discardPrev(),
    doubleNext(),
    doublePrev(),
  ];
  for (let i = 0; i < arr.length; i++) {
    let index = arrFunc.indexOf(arr[i]);
    if (index != -1) {
      arrFuncToCall[i]();
    }
  }
};

function discardNext(arr) {
  return arr;
}
function discardPrev(arr) {}
function doubleNext(arr) {}
function doublePrev(arr) {}
