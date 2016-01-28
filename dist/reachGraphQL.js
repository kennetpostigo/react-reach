"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reachGraphQL = reachGraphQL;

var _transport = require("./utils/transport.js");

require("babel-polyfill");

/**
 * [reachGraphQL Makes queres or mutations against GraphQL]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [should contain object with different query params]
 * @return {[Object]}             [Data that was queried or qutated]
 */
function reachGraphQL(path, query) {
  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return function _callee() {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _transport.transport)(path, query, queryParams));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);

          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }, null, this, [[0, 7]]);
  };
}
