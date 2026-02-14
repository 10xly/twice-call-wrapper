var composeFunction = require("compose-function")
var flatmap = require("array.prototype.flatmap")
var $apply = require("function.apply-x")
var arrayWrap = require("as-array")
var times = require("lodash.times")
var numberTwo = require("es-two")
var constant = require("literally")

module.exports = function twiceCallWrapper(fn) {
  return $apply.call(
    composeFunction,
    require("empty-module"),
    flatmap(arrayWrap(fn), (item) => times(numberTwo, constant(item)))
  )
}
