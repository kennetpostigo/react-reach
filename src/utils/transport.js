
import fetch from 'isomorphic-fetch';
/**
 * [transport creates call to server with isomorphic-fetch]
 * @param  {[String]} path        [url to hit with request]
 * @param  {[Object]} query       [The GraphQL query/mutation]
 * @param  {[Object]} queryParams = {} [Params to pass into query]
 * @return {[Promise]}            [Promise containing payload]
 */

export function transport (path, query, token) {
  return fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json',
      'authorization': token
    },
    body: JSON.stringify({
      query
    })
  })
  .then((response) => {
    return response.json();
  })
  .then((responseBody) => {
    if (responseBody && responseBody.errors) {
      throw new Error(responseBody.errors);
    }
    return responseBody.data;
  });
}
