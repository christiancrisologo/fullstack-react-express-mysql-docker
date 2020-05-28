const { expect } = require("chai");
const sinon = require("sinon");
const controllers = require("../src/controllers");

const dummyUser = [
  {
    id: 1,
    first_name: "Christian",
    last_name: "Crisologo",
    email: "test@test.com",
    password: "secret",
    location: "Philippines",
    created_at: null,
    update_at: "2020-05-23T15:52:50.000Z",
    deleted_at: null,
  },
];

describe("controllers", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should call the api /getUsers", () => {
    sinon
      .stub(controllers, "getUsers")
      .callThroughWithNew()
      .withArgs({}, {})
      .returns({ result: [dummyUser] });

    expect(controllers.getUsers({}, {})).to.deep.equal({ result: [dummyUser] });
    expect(controllers.getUsers({}, {})).to.not.deep.equal({ result: [] });
  });

  it("should call the api  /getUser", () => {
    sinon
      .stub(controllers, "getUser")
      .callThroughWithNew()
      .withArgs({}, {})
      .returns({ result: dummyUser });

    expect(controllers.getUser({}, {})).to.deep.equal({ result: dummyUser });
    expect(controllers.getUser({}, {})).to.not.deep.equal({ result: null });
  });

  it("should call the api  /createUser", () => {
    const requestBody = {
      body: {
        first_name: "Christian",
        last_name: "Crisologo",
        email: "test@test.com",
        password: "secret",
        location: "Philippines",
        created_at: null,
        update_at: "2020-05-23T15:52:50.000Z",
        deleted_at: null,
      },
    };

    sinon
      .stub(controllers, "createUser")
      .callThroughWithNew()
      .withArgs(requestBody, {})
      .returns({ result: { id: 2 } });

    expect(controllers.createUser(requestBody, {})).to.deep.equal({
      result: { id: 2 },
    });
    expect(controllers.createUser(requestBody, {})).to.not.deep.equal({
      result: null,
    });
  });

  it("should call the api  /updateUser", () => {
    const requestBody = {
      body: {
        first_name: "New User",
        last_name: "foo",
        email: "test@test.com",
        password: "secret",
        location: "Philippines",
        created_at: null,
        update_at: "2020-05-23T15:52:50.000Z",
        deleted_at: null,
      },
    };

    sinon
      .stub(controllers, "updateUser")
      .callThroughWithNew()
      .withArgs(requestBody, {})
      .returns({ result: "Update success!" });

    expect(controllers.updateUser(requestBody, {})).to.deep.equal({
      result: "Update success!",
    });
    expect(controllers.updateUser(requestBody, {})).to.not.deep.equal({
      result: null,
    });
  });

  it("should call the api  /deleteUser", () => {
    sinon
      .stub(controllers, "deleteUser")
      .callThroughWithNew()
      .withArgs({ id: 2 }, {})
      .returns({ result: "Delete success!" });

    expect(controllers.deleteUser({ id: 2 }, {})).to.deep.equal({
      result: "Delete success!",
    });
    expect(controllers.deleteUser({ id: 2 }, {})).to.not.deep.equal({
      result: null,
    });
  });
});
