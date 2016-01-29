import {transport} from './transport.js';
require('babel-polyfill');

/**
 * [reachGraphQL Makes queres or mutations against GraphQL]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [should contain object with different query params]
 * @return {[Object]}             [Data that was queried or mutated]
 */
export function reachGraphQL (path, query, queryParams = {}) {
  return async () => {
    try{
      let response = await transport(path, query, queryParams);
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
}
