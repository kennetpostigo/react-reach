import fetch from 'isomorphic-fetch';
/**
 * [transport creates call to server with isomorphic-fetch]
 * @param  {[String]} path        [url to hit with request]
 * @param  {[Object]} query       [The GraphQL query/mutation]
 * @param  {[Object]} queryParams = {} [Params to pass into query]
 * @return {[Promise]}            [Promise containing payload]
 */

 export function transport (path, query, queryParams = {}) {
     return new Promise ((resolve, reject) => {
       return fetch(path, {
             method: 'POST',
             mode: 'cors',
             headers: {
                 'Accept': 'application/json',
                 'content-type': 'application/json'
             },
             body: JSON.stringify({
                 query,
                 queryParams
             })
         })
         .then(res => res.json())
         .then(response => {
           if(response.errors) {
             return error(response.errors);
           }
           return resolve(response.data);
         })
         .catch(error);
     });
 }

// Previous Version
// export function transport (path, query, queryParams = {}) {
//   return fetch(path, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       query,
//       queryParams
//     })
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((responseBody) => {
//     if (responseBody && responseBody.errors) {
//       throw new Error(responseBody.errors);
//     }
//     return responseBody.data;
//   });
// }
