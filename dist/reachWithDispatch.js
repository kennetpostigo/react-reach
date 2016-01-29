'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reachWithDispatch;

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
function reachWithDispatch(path, query) {
  var _this2 = this;

  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var actionCreator = arguments[3];

  return function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch) {
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
      }, _callee, _this2, [[0, 7]]);
    })),
        _this = _this2;
    return function (_x2) {
      return ref.apply(_this, arguments);
    };
  }();
}