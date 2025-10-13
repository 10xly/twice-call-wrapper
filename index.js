var composeFunction = require("compose-function")
var flatmap = require("array.prototype.flatmap")

module.exports = function twiceCallWrapper(fn) {
  return composeFunction(...flatmap([fn], (item) => [item, item]))
}
