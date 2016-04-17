var assert = require("assert");
var request = require('request-promise').defaults({
  json: true,
  resolveWithFullResponse: true
});

describe("Should test each dynamic service", function() {
  before(function(done) {
    var suite = this.test.parent;

    // get a list of svc paths
    return request.get(url("/all/"))
      .then(function(response) {
        assert.equal(response.statusCode, 200);
        assert.notEqual(response.body.length, 0);
        return response.body;
      })
      .then(function(svcPaths) {
        // register new tests
        svcPaths.map(createTest).forEach(suite.addTest.bind(suite));
      })
      // finish hook
      .then(done)
      .catch(done);
  });

  it("Should start tests for each dynamic service", function() {
    // we need to tell mocha to register first test in this suite
    // otherwise it will not wait execute before hook
    assert.equal(true, true);
  });
});

function createTest(path, i) {
  var svc = url(path);

  return it(`Invoking GET ${svc} shall return status code 200`, function(done) {
    return request.get(svc)
      .then(function(response) {
        assert.equal(response.statusCode, 200);
      })
      .then(done)
      .catch(done);
  });
}

function url(path) {
  return `http://demo2523516.mockable.io/svc/dynamic-services${path}`;
}
