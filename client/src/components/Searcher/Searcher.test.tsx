import "@testing-library/jest-dom";

import React from "react";
import renderApp from "../../helpers/tests/AppProvider";

import Searcher from "./Searcher";

describe("Searcher", () => {
  test("render init snapshot", () => {
    const { container } = renderApp(
      <Searcher loading={false} title={"TEST_TITLE"} onSubmit={() => {}} />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdnylx hjpgsz"
        >
          <form
            class="sc-gtssRu"
          >
            <div
              class="MuiContainer-root sc-dlnjPT jzeRYD MuiContainer-maxWidthLg"
            >
              <h1
                class="MuiTypography-root sc-gKAblj gcKJzh MuiTypography-h1"
              >
                TEST_TITLE
              </h1>
              <div
                class="MuiGrid-root sc-iCoHVE MuiGrid-container MuiGrid-spacing-xs-2"
              >
                <div
                  class="MuiGrid-root sc-iCoHVE MuiGrid-item MuiGrid-grid-xs-12"
                >
                  <div
                    class="MuiFormControl-root sc-hKFyIo MuiFormControl-fullWidth"
                  >
                    <label
                      class="MuiFormLabel-root MuiInputLabel-root sc-eCApGN MuiInputLabel-formControl MuiInputLabel-animated"
                      data-shrink="false"
                      for="search-slug"
                    >
                      Slug
                    </label>
                    <div
                      class="MuiInputBase-root MuiInput-root MuiInput-underline sc-jSFkmK MuiInputBase-formControl MuiInput-formControl"
                    >
                      <input
                        aria-invalid="false"
                        class="MuiInputBase-input MuiInput-input"
                        id="search-slug"
                        name="slug"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="MuiBox-root MuiBox-root-2 sc-fujyUd eiAQMf"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text sc-pNWxx"
                  tabindex="0"
                  type="submit"
                >
                  <span
                    class="MuiButton-label"
                  >
                    Search
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    `);
  });
});
