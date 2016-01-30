'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reachWithDispatch = undefined;

var _transport = require('./utils/transport.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [reachWithDispatch description]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [should contain object with different query params]
 * @param  {[type]} actionCreator =  (  [The actionCreator to dispatch]
 * @return {[function]}               [dispatch to store]
 */

var reachWithDispatch = exports.reachWithDispatch = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path, query) {
    var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    var actionCreator = arguments[3];
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _transport.transport)(path, query, queryParams);

          case 3:
            response = _context.sent;

            dispatch(actionCreator(response));
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
    }, _callee, this, [[0, 7]]);
  }));
  return function reachWithDispatch(_x, _x2, _x3, _x4) {
    return ref.apply(this, arguments);
  };
}();
