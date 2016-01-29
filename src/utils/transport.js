import fetch from 'isomorphic-fetch';
export function transport (path, query, queryParams = {}) {
    var url = path;
    return new Promise ((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query,
                queryParams
            })
        })
        .then(res => res.json())
        .then(response => {
            if (response.errors) {
              return reject(response.errors);
            }
            return resolve(response.data);
        })
        .catch(response.error);
    });
}

// import fetch from 'isomorphic-fetch';
// /**
//  * [transport creates call to server with isomorphic-fetch]
//  * @param  {[String]} path        [url to hit with request]
//  * @param  {[Object]} query       [The GraphQL query/mutation]
//  * @param  {[Object]} queryParams = {} [Params to pass into query]
//  * @return {[Promise]}            [Promise containing payload]
//  */
// export function transport (path, query, queryParams = {}) {
//
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
//   .then((response) => {
//     if (response && response.errors) {
//       throw new Error(response.errors);
//     }
//     return response.data;
//   });
//
// }
