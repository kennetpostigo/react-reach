'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reachWithDispatch = reachWithDispatch;

var _transport = require('./transport.js');

require('babel-polyfill');

/**
 * [reachWithDispatch description]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [should contain object with different query params]
 * @param  {[type]} actionCreator =  (  [The actionCreator to dispatch]
 * @return {[function]}               [dispatch to store]
 */
function reachWithDispatch(path, query) {
  var _this = this;

  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var actionCreator = arguments[3];

  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _transport.transport)(path, query, queryParams));

          case 3:
            response = _context.sent;

            dispatch(actionCreator(response.data));
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, null, _this, [[0, 7]]);
  };
}
