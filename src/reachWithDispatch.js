import { transport } from './utils/transport';

/**
 * [reachWithDispatch description]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [should contain object with different query params]
 * @param  {[type]} actionCreator =  (  [The actionCreator to dispatch]
 * @return {[function]}               [dispatch to store]
 */
export function reachWithDispatch (path, query, queryParams = {}, token, actionCreator) {
  return transport(path, query, queryParams, token).then(res => dispatch => dispatch(actionCreator(res)));
}
