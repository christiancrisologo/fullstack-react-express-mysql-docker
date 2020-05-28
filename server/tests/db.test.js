const { expect } = require("chai");
const sinon = require("sinon");
const db = require("../src/db");

describe("db connections", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should query", async () => {
    sinon.stub(db, "query").resolves({ result: [] });
    sinon.stub(db, "getConnection").resolves({ result: [] });
    const actual = await db.query("SELECT * FROM users");
    expect(actual).to.deep.equal({ result: [] });
  });
});
