import reducer, { showSpinner, hideSpinner } from "store/spinner";

describe("Spinner reducer", () => {
  test("should return initial state", () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual({
      isShow: false,
    });
  });

  test("should show spinner", () => {
    const previousState = {
      isShow: false,
    };

    expect(reducer(previousState, showSpinner())).toEqual({
      isShow: true,
    });
  });

  test("should hide spinner", () => {
    const previousState = {
      isShow: true,
    };

    expect(reducer(previousState, hideSpinner())).toEqual({
      isShow: false,
    });
  });
});
