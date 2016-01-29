'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transport = transport;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transport(path, query) {
    var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var url = path;
    return new Promise(function (resolve, reject) {
        (0, _isomorphicFetch2.default)(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: query,
                queryParams: queryParams
            })
        }).then(function (res) {
            return res.json();
        }).then(function (response) {
            if (response.errors) {
                return reject(response.errors);
            }
            return resolve(response.data);
        }).catch(response.error);
    });
}

// import fetch from 'isomorphic-fetch';
// /**
//  * [transport creates call to server with isomorphic-fetch]
//  * @param  {[String]} path        [url to hit with request]
//  * @param  {[Object]} query       [The GraphQL query/mutation]
//  * @param  {[Object]} queryParams = {} [Params to pass into query]
//  * @return {[Promise]}            [Promise containing payload]
//  */
// export function transport (path, query, queryParams = {}) {
//
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
//   .then((response) => {
//     if (response && response.errors) {
//       throw new Error(response.errors);
//     }
//     return response.data;
//   });
//
// }
