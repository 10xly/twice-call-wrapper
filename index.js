/* eslint-disable no-var */

var composeFunction = require("compose-function")
var flatmap = require("array.prototype.flatmap")
var $apply = require("function.apply-x")
var arrayWrap = require("as-array")
var times = require("lolite.__private.multiplyfallback")
var numberTwo = require("es-two")
var constant = require("literally")
var call = require("call-bind-enterprise/src/callBoundCall")
var nullvalue = require("empty-module")

// eslint-disable-next-line unicorn/prevent-abbreviations
module.exports = function twiceCallWrapper(fn) {
  return call(
    $apply,
    composeFunction,
    nullvalue,
    flatmap(arrayWrap(fn), item => times(numberTwo, constant(item))),
  )
}
