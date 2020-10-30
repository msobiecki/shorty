import "@testing-library/jest-dom";

import React from "react";
import renderApp from "../../helpers/tests/AppProvider";

import Default from "./Default";

describe("Default Layout", () => {
  test("render init snapshot", () => {
    const { container } = renderApp(<Default title={"TEST_TITLE"}></Default>);

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
          TEST_TITLE
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
        />
        <div
          class="MuiBox-root MuiBox-root-5 sc-kLokih gFFbVE"
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
