"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reachWithDispatch = reachWithDispatch;

var _transport = require("./utils/transport.js");

require("babel-polyfill");

/**
 * [reachWithDispatch description]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [should contain object with different query params]
 * @param  {[type]} actionCreator =  (  [The actionCreator to dispatch]
 * @return {[function]}               [dispatch to store]
 */
function reachWithDispatch(path, query) {
  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var actionCreator = arguments[3];

  return async function (dispatch) {
    try {
      var response = await (0, _transport.transport)(path, query, queryParams);
      dispatch(actionCreator(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
