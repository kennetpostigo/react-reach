'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transport = transport;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [transport creates call to server with isomorphic-fetch]
 * @param  {[String]} path        [url to hit with request]
 * @param  {[Object]} query       [The GraphQL query/mutation]
 * @param  {[Object]} queryParams = {} [Params to pass into query]
 * @return {[Promise]}            [Promise containing payload]
 */
function transport(path, query) {
  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return (0, _isomorphicFetch2.default)(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      queryParams: queryParams
    })
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    if (response && response.errors) {
      throw new Error(response.errors);
    }
    return response.data;
  });
}
