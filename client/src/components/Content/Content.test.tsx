import "@testing-library/jest-dom";

import React from "react";
import { screen } from "@testing-library/react";
import renderApp from "../../helpers/tests/AppProvider";

import Content from "./Content";

describe("Content", () => {
  test("render init snapshot", () => {
    const { container } = renderApp(<Content></Content>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdnylx glBMGF"
        />
      </div>
    `);
  });

  test("render children element when string", () => {
    const getByText = "CHILDREN_ELEMENT";
    const childrenElement = "CHILDREN_ELEMENT";
    renderApp(<Content>{childrenElement}</Content>);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.getByText(getByText)).toBeInTheDocument();
  });

  test("render children element when JSX.Element", () => {
    const getByText = "CHILDREN_ELEMENT";
    const childrenElement = <div>{"CHILDREN_ELEMENT"}</div>;
    renderApp(<Content>{childrenElement}</Content>);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.getByText(getByText)).toBeInTheDocument();
  });

  test("render children element when JSX.Element array", () => {
    const getByText = "CHILDREN_ELEMENT";
    const childrenElement = [
      <div key={1}>{"CHILDREN_ELEMENT"}</div>,
      <div key={2}>{"OTHER_CHILDREN_ELEMENT"}</div>,
    ];
    renderApp(<Content>{childrenElement}</Content>);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.getByText(getByText)).toBeInTheDocument();
  });
});
