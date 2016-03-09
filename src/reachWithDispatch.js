
import { transport } from './utils/transport.js';

/**
 * [reachWithDispatch description]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [should contain object with different query params]
 * @param  {[type]} actionCreator =  (  [The actionCreator to dispatch]
 * @return {[function]}               [dispatch to store]
 */
export async function reachWithDispatch (path, query, queryParams = {}, actionCreator) {
  try{
    let response = await transport(path, query, queryParams);
    return dispatch => {
      return dispatch(actionCreator(response));
    }
  } catch (error) {
    console.log(error);
  }
}
