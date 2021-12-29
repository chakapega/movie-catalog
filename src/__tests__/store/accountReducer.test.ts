import reducer, { saveAccountDetails, removeAccountDetails } from "store/account";

describe("Account reducer", () => {
  test("should return initial state", () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual({
      accountDetails: null,
    });
  });

  test("should save account details", () => {
    const previousState = {
      accountDetails: null,
    };

    expect(reducer(previousState, saveAccountDetails({ username: "username", id: 42 }))).toEqual({
      accountDetails: { username: "username", id: 42 },
    });
  });

  test("should remove account details", () => {
    const previousState = {
      accountDetails: { username: "username", id: 42 },
    };

    expect(reducer(previousState, removeAccountDetails())).toEqual({
      accountDetails: null,
    });
  });
});
