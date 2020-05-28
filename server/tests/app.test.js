const { expect } = require("chai");
const server = require("../src/server");
const request = require("supertest");

describe("App server", function () {
  it("should inherit from event emitter", (done) => {
    server.on("foo", done);
    server.emit("foo");
  });

  it("should be callable", function () {
    expect(server).to.be.true;
    expect(typeof server).to.equal("function");
  });

  it("should 404 without routes", function (done) {
    request(server).get("").expect(404, done);
  });
});
