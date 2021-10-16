import { render } from '@testing-library/react';

import App from './App';

describe('Search Page', () => {
  test('render init snapshot', () => {
    const { container } = render(<App></App>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdfBQB iKYVx"
        >
          <div
            class="MuiBox-root MuiBox-root-2 sc-gsTEea FtNyv"
          >
            <a
              class="sc-dlfnuX cfkoEm"
              href="/"
              title="Go to homepage"
            >
              <p
                class="MuiTypography-root sc-hKgJUU MuiTypography-body1"
              >
                TEST Shorty
              </p>
            </a>
          </div>
           | 
          Home
          <div
            class="sc-jJEKmz fjhaCX"
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
            class="MuiBox-root MuiBox-root-5 sc-iBPTik guJOWj"
          >
            <form
              class="sc-fubCzh"
            >
              <div
                class="MuiContainer-root sc-pGacB jsAUto MuiContainer-maxWidthLg"
              >
                <h1
                  class="MuiTypography-root sc-crrszt eiAqem MuiTypography-h1"
                >
                  TEST Shorty simplifies the url
                </h1>
                <div
                  class="MuiGrid-root sc-dQoVA MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    class="MuiGrid-root sc-dQoVA MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6"
                  >
                    <div
                      class="MuiFormControl-root sc-jrAFXE MuiFormControl-fullWidth"
                    >
                      <label
                        class="MuiFormLabel-root MuiInputLabel-root sc-kEjbQP MuiInputLabel-formControl MuiInputLabel-animated"
                        data-shrink="false"
                        for="create-address"
                      >
                        Address
                      </label>
                      <div
                        class="MuiInputBase-root MuiInput-root MuiInput-underline sc-iqHYmW MuiInputBase-formControl MuiInput-formControl"
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
                    class="MuiGrid-root sc-dQoVA MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6"
                  >
                    <div
                      class="MuiFormControl-root sc-jrAFXE MuiFormControl-fullWidth"
                    >
                      <label
                        class="MuiFormLabel-root MuiInputLabel-root sc-kEjbQP MuiInputLabel-formControl MuiInputLabel-animated"
                        data-shrink="false"
                        for="create-slug"
                      >
                        Slug
                      </label>
                      <div
                        class="MuiInputBase-root MuiInput-root MuiInput-underline sc-iqHYmW MuiInputBase-formControl MuiInput-formControl"
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
                  class="MuiBox-root MuiBox-root-6 sc-bqyKOL eUIWxc"
                >
                  <button
                    class="MuiButtonBase-root MuiButton-root MuiButton-text sc-kstqJO"
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
          class="MuiBox-root MuiBox-root-7 sc-kLgnNl bHCKme"
        >
          <p
            class="MuiTypography-root sc-iktFfs lnLkTd MuiTypography-body1"
          >
            ©2021 SHORTY. All rights reserved
          </p>
        </div>
        <div
          class="Toastify"
        />
      </div>
    `);
  });
});
