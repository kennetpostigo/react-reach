import {transport} from './utils/transport.js';
require('babel-polyfill');


// Use currying to reduce size of the parameters?
// If so how do people not familiar with currying work around this
// store or dispatch?



export function reachWithOpts (path, query, queryParams = {}, store, actionCreator, retry) {
    //1. store.getState(propertyToChange)
    //2. store.dispatch(actionCreator())
    //3. return async dispatch => {
    //   try{
    //4.   let response = await transport(path, query, queryParams, retry);
    //5.  } catch(error) {
    //        try{
    //          let response = await transport(path, query, queryParams)
    //6.      } catch(error) {
    //          dispatch(actionCreator(1));
    //7.        console.log(error);
    //        }
    //    }
    // }
}


//1. getState of the current property value you are going to act upon
//2. dispatch synchronous function to update client
//3. return asynchronous function with dispatch to send payload to server
//4. transport and dispatch actioncreator with response
//5. if error catch and the error and try transport again.
//6. setstate to previous value
//7. if error return the error to client with failure message
