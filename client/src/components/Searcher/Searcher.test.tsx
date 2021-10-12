import '@testing-library/jest-dom';

import React from 'react';
import renderApp from '../../helpers/tests/AppProvider';

import Searcher from './Searcher';

describe('Searcher', () => {
  test('render init snapshot', () => {
    const { container } = renderApp(
      <Searcher loading={false} title={'TEST_TITLE'} onSubmit={() => {}} />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdfBQB iWcLuv"
        >
          <form
            class="sc-gsTEea"
          >
            <div
              class="MuiContainer-root sc-dlfnuX eEHIpK MuiContainer-maxWidthLg"
            >
              <h1
                class="MuiTypography-root sc-gKseQn ddxUIF MuiTypography-h1"
              >
                TEST_TITLE
              </h1>
              <div
                class="MuiGrid-root sc-iBPTik MuiGrid-container MuiGrid-spacing-xs-2"
              >
                <div
                  class="MuiGrid-root sc-iBPTik MuiGrid-item MuiGrid-grid-xs-12"
                >
                  <div
                    class="MuiFormControl-root sc-hKgJUU MuiFormControl-fullWidth"
                  >
                    <label
                      class="MuiFormLabel-root MuiInputLabel-root sc-eCstlR MuiInputLabel-formControl MuiInputLabel-animated"
                      data-shrink="false"
                      for="search-slug"
                    >
                      Slug
                    </label>
                    <div
                      class="MuiInputBase-root MuiInput-root MuiInput-underline sc-jSgvzq MuiInputBase-formControl MuiInput-formControl"
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
                class="MuiBox-root MuiBox-root-2 sc-fubCzh dBhpCm"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text sc-pGacB"
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
