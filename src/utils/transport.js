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
