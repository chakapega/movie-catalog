import reducer, { showNotice, hideNotice } from "store/notice";

describe("Notice reducer", () => {
  test("should return initial state", () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual({
      isShow: false,
      text: null,
    });
  });

  test("should show notice", () => {
    const previousState = {
      isShow: false,
      text: null,
    };

    expect(reducer(previousState, showNotice("status message"))).toEqual({
      isShow: true,
      text: "status message",
    });
  });

  test("should hide notice", () => {
    const previousState = {
      isShow: true,
      text: "status message",
    };

    expect(reducer(previousState, hideNotice())).toEqual({
      isShow: false,
      text: null,
    });
  });
});
