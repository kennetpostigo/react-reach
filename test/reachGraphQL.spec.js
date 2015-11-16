import {expect} from 'chai';
import {transport} from './../src/utils/transport.js';
import {reachGraphQL} from './../src/index.js';

describe('react-reach', () => {

    describe('.transport()', ()  => {
        it('should successfully make a call for read', async (done) => {

            var query = `{
                user(id: "1") {
                    name
                }
            }`;

            var expected = {
                "data": {
                    "user": {
                        "name": "Dan"
                    }
                }
            };

         var result = await transport('localhost:3000/graphql', query).then(done());

         expect(result).to.equal({ data: expected });
        });
    });

    describe('.reachGraphQL()', ()  => {

        it('should successfully read data from the server', async (done) => {
            var query = `{
                user(id: "1") {
                    name
                }
            }`;

            var expected = {
                "data": {
                    "user": {
                        "name": "Dan"
                    }
                }
            };

         var result = reachGraphQL('localhost:3000/graphql',query).then(done())

         expect(result).to.equal({ data: expected });
        });
    });

});
