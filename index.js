var composeFunction = require('compose-function')

module.exports = function twiceCallWrapper(fn) {
  return composeFunction(fn, fn)
}