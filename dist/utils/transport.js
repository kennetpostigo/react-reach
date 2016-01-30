'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

    return new _promise2.default(function (resolve, reject) {
        return (0, _isomorphicFetch2.default)(path, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: (0, _stringify2.default)({
                query: query,
                queryParams: queryParams
            })
        }).then(function (res) {
            return res.json();
        }).then(function (response) {
            if (response.errors) {
                return error(response.errors);
            }
            return resolve(response.data);
        }).catch(error);
    });
}

// Previous Version
// export function transport (path, query, queryParams = {}) {
//   return fetch(path, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       query,
//       queryParams
//     })
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((responseBody) => {
//     if (responseBody && responseBody.errors) {
//       throw new Error(responseBody.errors);
//     }
//     return responseBody.data;
//   });
// }
