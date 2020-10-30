import "@testing-library/jest-dom";

import React from "react";
import renderApp from "../../helpers/tests/AppProvider";

import Creator from "./Creator";

describe("Creator", () => {
  test("render init snapshot", () => {
    const { container } = renderApp(
      <Creator loading={false} title={"TEST_TITLE"} onSubmit={() => {}} />
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
                  class="MuiGrid-root sc-iCoHVE MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6"
                >
                  <div
                    class="MuiFormControl-root sc-hKFyIo MuiFormControl-fullWidth"
                  >
                    <label
                      class="MuiFormLabel-root MuiInputLabel-root sc-eCApGN MuiInputLabel-formControl MuiInputLabel-animated"
                      data-shrink="false"
                      for="create-address"
                    >
                      Address
                    </label>
                    <div
                      class="MuiInputBase-root MuiInput-root MuiInput-underline sc-jSFkmK MuiInputBase-formControl MuiInput-formControl"
                    >
                      <input
                        aria-invalid="false"
                        class="MuiInputBase-input MuiInput-input"
                        id="create-address"
                        name="address"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root sc-iCoHVE MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6"
                >
                  <div
                    class="MuiFormControl-root sc-hKFyIo MuiFormControl-fullWidth"
                  >
                    <label
                      class="MuiFormLabel-root MuiInputLabel-root sc-eCApGN MuiInputLabel-formControl MuiInputLabel-animated"
                      data-shrink="false"
                      for="create-slug"
                    >
                      Slug
                    </label>
                    <div
                      class="MuiInputBase-root MuiInput-root MuiInput-underline sc-jSFkmK MuiInputBase-formControl MuiInput-formControl"
                    >
                      <input
                        aria-invalid="false"
                        class="MuiInputBase-input MuiInput-input"
                        id="create-slug"
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
                    SHORT IT
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
