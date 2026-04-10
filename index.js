/* eslint-disable no-var */

var composeFunction = require("compose-function")
var flatmap = require("array.prototype.flatmap")

// eslint-disable-next-line unicorn/prevent-abbreviations
module.exports = function twiceCallWrapper(fn) {
  return composeFunction(...flatmap([fn], item => [item, item]))
}