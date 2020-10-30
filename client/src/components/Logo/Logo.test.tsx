import "@testing-library/jest-dom";

import React from "react";
import { screen } from "@testing-library/react";
import renderApp from "../../helpers/tests/AppProvider";

import Logo from "./Logo";

describe("Logo", () => {
  test("render init snapshot", () => {
    const { container } = renderApp(<Logo></Logo>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdnylx ewUyVv"
        >
          <a
            class="sc-gtssRu hVyHwE"
            href="/"
            title="Go to homepage"
          >
            <p
              class="MuiTypography-root sc-dlnjPT MuiTypography-body1"
            />
          </a>
        </div>
      </div>
    `);
  });

  test("render children element when string", () => {
    const childrenElement = "TEST_PRIMARY";
    renderApp(<Logo>{childrenElement}</Logo>);

    expect(screen.getByText(childrenElement)).toBeInTheDocument();
  });
});
