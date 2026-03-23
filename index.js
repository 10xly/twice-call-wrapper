/* eslint-disable no-var */

var composeFunction = require("compose-function")
var flatmap = require("array.prototype.flatmap")
var $apply = require("function.apply-x")
var arrayWrap = require("as-array")
var times = require("lodash.times")
var numberTwo = require("es-two")
var constant = require("literally")
var call = require("call-bind-enterprise/src/callBoundCall")

// eslint-disable-next-line unicorn/prevent-abbreviations
module.exports = function twiceCallWrapper(fn) {
  return call(
    $apply,
    composeFunction,
    require("empty-module"),
    flatmap(arrayWrap(fn), (item) => times(numberTwo, constant(item)))
  )
}
