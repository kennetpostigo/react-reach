import {transport} from './utils/transport.js';
require("babel-polyfill");

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
