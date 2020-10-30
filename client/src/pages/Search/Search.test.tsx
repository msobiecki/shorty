import "@testing-library/jest-dom";

import React from "react";
import renderApp from "../../helpers/tests/AppProvider";

import Search from "./Search";

describe("Search Page", () => {
  test("render init snapshot", () => {
    const { container } = renderApp(<Search></Search>);

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
          Search
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
            class="MuiGrid-root MuiGrid-container"
          >
            <div
              class="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6"
            >
              <div
                class="MuiBox-root MuiBox-root-5 sc-fnVYJo iDGIRQ"
              >
                <form
                  class="sc-fFSRdu"
                >
                  <div
                    class="MuiContainer-root sc-bkbjAj kFMbfJ MuiContainer-maxWidthLg"
                  >
                    <h1
                      class="MuiTypography-root sc-dlMBXb hECZTl MuiTypography-h1"
                    >
                      Search your shorty
                    </h1>
                    <div
                      class="MuiGrid-root sc-kfYqjs MuiGrid-container MuiGrid-spacing-xs-2"
                    >
                      <div
                        class="MuiGrid-root sc-kfYqjs MuiGrid-item MuiGrid-grid-xs-12"
                      >
                        <div
                          class="MuiFormControl-root sc-iemXMA MuiFormControl-fullWidth"
                        >
                          <label
                            class="MuiFormLabel-root MuiInputLabel-root sc-dIvqjp MuiInputLabel-formControl MuiInputLabel-animated"
                            data-shrink="false"
                            for="search-slug"
                          >
                            Slug
                          </label>
                          <div
                            class="MuiInputBase-root MuiInput-root MuiInput-underline sc-hHEjAm MuiInputBase-formControl MuiInput-formControl"
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
                      class="MuiBox-root MuiBox-root-6 sc-fKgIGh jumiqG"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text sc-bCwgka"
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
            <div
              class="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6"
            >
              <div
                class="MuiBox-root MuiBox-root-7 sc-cxNIbT frhZof"
              />
            </div>
          </div>
        </div>
        <div
          class="MuiBox-root MuiBox-root-8 sc-kLokih gFFbVE"
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
