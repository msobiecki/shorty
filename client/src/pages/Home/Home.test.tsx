import "@testing-library/jest-dom";

import React from "react";
import renderApp from "../../helpers/tests/AppProvider";

import Home from "./Home";

describe("Home Page", () => {
  test("render init snapshot", () => {
    const { container } = renderApp(<Home></Home>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdnylx eQJtgV"
        >
          <div
            class="MuiBox-root MuiBox-root-2 sc-gtssRu jFIKhe"
          >
            <a
              class="sc-dlnjPT fsQckY"
              href="/"
              title="Go to homepage"
            >
              <p
                class="MuiTypography-root sc-hKFyIo MuiTypography-body1"
              >
                Shorty
              </p>
            </a>
          </div>
           | 
          Home
          <div
            class="sc-jJMGHv eHRLxW"
          />
          <div
            class="MuiBox-root MuiBox-root-3 sc-eCApGN hGfBrw"
          >
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-text sc-jSFkmK"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiButton-label"
              >
                Home
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-text sc-jSFkmK"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiButton-label"
              >
                Search shorty
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
          </div>
        </div>
        <div
          class="MuiBox-root MuiBox-root-4 sc-gKAblj kIwFtN"
        >
          <div
            class="MuiBox-root MuiBox-root-5 sc-iCoHVE kBwVLg"
          >
            <form
              class="sc-fujyUd"
            >
              <div
                class="MuiContainer-root sc-pNWxx fxlCnW MuiContainer-maxWidthLg"
              >
                <h1
                  class="MuiTypography-root sc-crzoUp dXENsl MuiTypography-h1"
                >
                  Shorty simplifies the url
                </h1>
                <div
                  class="MuiGrid-root sc-dIsAE MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    class="MuiGrid-root sc-dIsAE MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6"
                  >
                    <div
                      class="MuiFormControl-root sc-jrsJCI MuiFormControl-fullWidth"
                    >
                      <label
                        class="MuiFormLabel-root MuiInputLabel-root sc-kEqYlL MuiInputLabel-formControl MuiInputLabel-animated"
                        data-shrink="false"
                        for="create-address"
                      >
                        Address
                      </label>
                      <div
                        class="MuiInputBase-root MuiInput-root MuiInput-underline sc-iqAbSa MuiInputBase-formControl MuiInput-formControl"
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
                    class="MuiGrid-root sc-dIsAE MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6"
                  >
                    <div
                      class="MuiFormControl-root sc-jrsJCI MuiFormControl-fullWidth"
                    >
                      <label
                        class="MuiFormLabel-root MuiInputLabel-root sc-kEqYlL MuiInputLabel-formControl MuiInputLabel-animated"
                        data-shrink="false"
                        for="create-slug"
                      >
                        Slug
                      </label>
                      <div
                        class="MuiInputBase-root MuiInput-root MuiInput-underline sc-iqAbSa MuiInputBase-formControl MuiInput-formControl"
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
                  class="MuiBox-root MuiBox-root-6 sc-bqGHjH iWjhzo"
                >
                  <button
                    class="MuiButtonBase-root MuiButton-root MuiButton-text sc-ksluoS"
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
        <div
          class="MuiBox-root MuiBox-root-7 sc-kLokih gFFbVE"
        >
          <p
            class="MuiTypography-root sc-iklIKw dDUKFn MuiTypography-body1"
          >
            ©2020 Shorty. All rights reserved
          </p>
        </div>
      </div>
    `);
  });
});
