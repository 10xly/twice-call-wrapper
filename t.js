var calledtwice = require('.');



var double = v => v * 2; // a simple function that doubles a number

var doubleTwice = calledtwice(double);

console.log(doubleTwice(5)) // quadruples a number because it doubles it and then doubles it again, like double(double(5))