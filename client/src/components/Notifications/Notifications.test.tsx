import "@testing-library/jest-dom";

import React from "react";
import renderApp from "../../helpers/tests/AppProvider";

import Notifications from "./Notifications";

describe("Notifications", () => {
  test("render init snapshot", () => {
    const { container } = renderApp(<Notifications></Notifications>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Toastify"
        />
      </div>
    `);
  });
});
