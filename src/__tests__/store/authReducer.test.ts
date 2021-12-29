import reducer, { saveSessionId, removeSessionId } from "store/auth";

describe("Auth reducer", () => {
  test("should return initial state", () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual({
      session_id: null,
    });
  });

  test("should save session id", () => {
    const previousState = {
      session_id: null,
    };

    expect(reducer(previousState, saveSessionId("sessionId"))).toEqual({ session_id: "sessionId" });
  });

  test("should remove account details", () => {
    const previousState = {
      session_id: "sessionId",
    };

    expect(reducer(previousState, removeSessionId())).toEqual({
      session_id: null,
    });
  });
});
