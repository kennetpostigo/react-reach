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
