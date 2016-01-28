import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
import {transport} from './../src/utils/transport.js';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';

describe('Transport', function () {

    it('should be defined', function() {
      chai.expect(transport).to.be.a('function');
    });

    describe('When requesting from a GraphQL server', function () {

      it("should return a promise", function () {
        var returnedPromise = transport('http://sysapi.com/graphql', "");

        chai.expect(returnedPromise).to.have.property("then");
        chai.expect(returnedPromise).to.have.property("catch");
      });

      it("should hit up GraphQL server", function () {
        fetchMock.mock("http://sysapi.com", 200);

        transport("http://sysapi.com", "*");
        chai.expect(fetchMock.calls().matched.length).to.equal(1);
      });

      it("should call success callback on success", function () {

        var successSpy = sinon.spy(), failedSpy = sinon.spy();

        fetchMock
          .mock("http://sysapi.com", 200);

        transport("http://sysapi.com", "")
          .then(successSpy)
          .catch(failedSpy);

        chai.expect(successSpy.called).to.be.true;
        chai.expect(failedSpy.called).to.be.false;

      });

    });

});








// describe('react-reach', function () {
//
//   describe('.transport()', function () {
//
//     it('should successfully make a call for read', function () {
//
//       var query = `{
//         user(id: "1") {
//           name
//         }
//       }`;
//
//       var expected = {
//         "data": {
//           "user": {
//             "name": "Dan"
//           }
//         }
//       };
//
//       var fetchDependencySpy = sinon.spy();
//
//       transport.__Rewire__('fetch', fetchDependencySpy);
//
//       transport('/graphql', query);
//       chai.expect(fetchDependencySpy.calledOnce).to.be.true;
//
//       transport.__ResetDependency__('fetch');
//     });
//
//   });
//
// });
