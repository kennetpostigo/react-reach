import { transport } from './utils/transport.js';

/**
 * [reachGraphQL Makes queres or mutations against GraphQL]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [Should contain object with different query params]
 * @return {[Object]}             [Data that was queried or mutated]
 */

 export async function reachGraphQL (path, query, queryParams = {}) {
     try {
         return await transport(path, query, queryParams);
     } catch (error) {
         console.log(error)
     }
 }
