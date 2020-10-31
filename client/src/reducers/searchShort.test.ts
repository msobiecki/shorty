import {
  SEARCH_SHORT_REQUEST,
  SEARCH_SHORT_RECEIVE,
  SEARCH_SHORT_ERROR,
  searchShortReducer as reducer,
} from "./searchShort";

describe("latest shorts reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      status: "idle",
    });
  });

  it("should handle SEARCH_SHORT_REQUEST", () => {
    expect(
      reducer(
        { status: "idle" },
        {
          type: SEARCH_SHORT_REQUEST,
          payload: { status: "pending" },
        }
      )
    ).toEqual({ status: "pending" });
  });

  it("should handle SEARCH_SHORT_RECEIVE", () => {
    expect(
      reducer(
        { status: "idle" },
        {
          type: SEARCH_SHORT_RECEIVE,
          payload: { status: "success" },
        }
      )
    ).toEqual({ status: "success" });
  });

  it("should handle SEARCH_SHORT_ERROR", () => {
    expect(
      reducer(
        { status: "idle" },
        {
          type: SEARCH_SHORT_ERROR,
          payload: { status: "error" },
        }
      )
    ).toEqual({ status: "error" });
  });
});
