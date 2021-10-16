import renderApp from '../../helpers/tests/AppProvider';

import Default from './Default';

describe('Default Layout', () => {
  test('render init snapshot', () => {
    const { container } = renderApp(<Default title={'TEST_TITLE'}></Default>);

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
          TEST_TITLE
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
        />
        <div
          class="MuiBox-root MuiBox-root-5 sc-kLgnNl bHCKme"
        >
          <p
            class="MuiTypography-root sc-iktFfs lnLkTd MuiTypography-body1"
          >
            ©2021 SHORTY. All rights reserved
          </p>
        </div>
      </div>
    `);
  });
});
