import {transport} from './utils/transport.js';
require("babel-polyfill");

export function reachGraphQL (path, query, queryParams = {}, actionCreator = () => {}) {
    return async dispatch => {
        try{
            let response = await transport(path, query, queryParams);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

}
