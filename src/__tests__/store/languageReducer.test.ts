import reducer, { changeActiveLanguage } from "store/language";

describe("Language reducer", () => {
  test("should return initial state", () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual({
      activeLanguage: "en",
    });
  });

  test("should change active language", () => {
    const previousState = {
      activeLanguage: "en",
    };

    expect(reducer(previousState, changeActiveLanguage("ru"))).toEqual({ activeLanguage: "ru" });
  });
});
