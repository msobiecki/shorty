import "@testing-library/jest-dom";

import React from "react";
import { screen } from "@testing-library/react";
import renderApp from "../../helpers/tests/AppProvider";

import List from "./List";

describe("List", () => {
  test("render init snapshot", () => {
    const { container } = renderApp(<List items={[]}></List>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdnylx iJikOc"
        />
      </div>
    `);
  });

  test("render primary element and secondary element", () => {
    const primaryElement = "TEST_PRIMARY";
    const secondaryElement = "TEST_SECONDARY";
    renderApp(<List
      items={[{ primary: primaryElement, secondary: secondaryElement }]}
    ></List>);

    expect(screen.getByText(primaryElement)).toBeInTheDocument();
    expect(screen.getByText(secondaryElement)).toBeInTheDocument();
  });
});
