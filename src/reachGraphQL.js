import { transport } from './utils/transport.js';

/**
 * [reachGraphQL Makes queres or mutations against GraphQL]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [Should contain object with different query params]
 * @return {[Object]}             [Data that was queried or mutated]
 */
export async function reachGraphQL (path, query, queryParams = {}) {
 try{
   let response = await transport(path, query, queryParams);
   return response;
 } catch (error) {
   console.log(error)
 }
}
