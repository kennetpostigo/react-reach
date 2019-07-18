import { transport } from './utils/transport';

/**
 * [reachGraphQL Makes queres or mutations against GraphQL]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [Should contain object with different query params]
 * @return {[Object]}             [Data that was queried or mutated]
 */

export function reachGraphQL (path, query, queryParams = {}, token) {
 return transport(path, query, queryParams, token).then(res => res);
}
