'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reachGraphQL = reachGraphQL;

var _transport = require('./utils/transport.js');

require('babel-polyfill');

/**
 * [reachGraphQL Makes queres or mutations against GraphQL]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [should contain object with different query params]
 * @return {[Object]}             [Data that was queried or qutated]
 */
function reachGraphQL(path, query) {
  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return async function () {
    try {
      var response = await (0, _transport.transport)(path, query, queryParams);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}
