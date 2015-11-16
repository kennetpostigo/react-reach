import {transport} from './utils/transport.js';
require("babel-polyfill");

/**
 * [reachWithDispatch description]
 * @param  {[String]} path        [path to the GraphQL server]
 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
 * @param  {[object]} queryParams =  {} [should contain object with different query params]
 * @param  {[type]} actionCreator =  (  [The actionCreator to dispatch]
 * @return {[function]}               [dispatch to store]
 */
export function reachWithDispatch (path, query, queryParams = {}, actionCreator = () => {}) {
    return async dispatch => {
        try{
            let response = await transport(path, query, queryParams);
             dispatch(actionCreator(response.data));
        } catch (error) {
            console.log(error)
        }
    }

}
