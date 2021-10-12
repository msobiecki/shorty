import '@testing-library/jest-dom';

import React from 'react';
import renderApp from '../../helpers/tests/AppProvider';

import Search from './Search';

describe('Search Page', () => {
  test('render init snapshot', () => {
    const { container } = renderApp(<Search></Search>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdfBQB iKYVx"
        >
          <div
            class="MuiBox-root MuiBox-root-2 sc-gsTEea FtNyv"
          >
            <a
              class="sc-dlfnuX cgfRhd"
              href="/"
              title="Go to homepage"
            >
              <p
                class="MuiTypography-root sc-hKgJUU MuiTypography-body1"
              >
                SHORTY
              </p>
            </a>
          </div>
           | 
          Search
          <div
            class="sc-jJEKmz kIiKjn"
          />
          <div
            class="MuiBox-root MuiBox-root-3 sc-eCstlR fjvN"
          >
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-text sc-jSgvzq"
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
              class="MuiButtonBase-root MuiButton-root MuiButton-text sc-jSgvzq"
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
          class="MuiBox-root MuiBox-root-4 sc-gKseQn jkGFUx"
        >
          <div
            class="MuiGrid-root MuiGrid-container"
          >
            <div
              class="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6"
            >
              <div
                class="MuiBox-root MuiBox-root-5 sc-fodVek fhIcCH"
              >
                <form
                  class="sc-fFucqa"
                >
                  <div
                    class="MuiContainer-root sc-bkzYnD gefftr MuiContainer-maxWidthLg"
                  >
                    <h1
                      class="MuiTypography-root sc-dmlqKv fItXYt MuiTypography-h1"
                    >
                      Search your shorty
                    </h1>
                    <div
                      class="MuiGrid-root sc-kfzBvY MuiGrid-container MuiGrid-spacing-xs-2"
                    >
                      <div
                        class="MuiGrid-root sc-kfzBvY MuiGrid-item MuiGrid-grid-xs-12"
                      >
                        <div
                          class="MuiFormControl-root sc-idOiZg MuiFormControl-fullWidth"
                        >
                          <label
                            class="MuiFormLabel-root MuiInputLabel-root sc-dIUeWJ MuiInputLabel-formControl MuiInputLabel-animated"
                            data-shrink="false"
                            for="search-slug"
                          >
                            Slug
                          </label>
                          <div
                            class="MuiInputBase-root MuiInput-root MuiInput-underline sc-hHfuMS MuiInputBase-formControl MuiInput-formControl"
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
                      class="MuiBox-root MuiBox-root-6 sc-fKFxtB gUzoqj"
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text sc-bBXrwG"
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
                class="MuiBox-root MuiBox-root-7 sc-cxFLGX kbsBaz"
              />
            </div>
          </div>
        </div>
        <div
          class="MuiBox-root MuiBox-root-8 sc-kLgnNl bHCKme"
        >
          <p
            class="MuiTypography-root sc-iktFfs lnLkTd MuiTypography-body1"
          >
            ©2021 CODESHAKER. All rights reserved
          </p>
        </div>
      </div>
    `);
  });
});
