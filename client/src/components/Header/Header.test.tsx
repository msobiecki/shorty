import { screen } from '@testing-library/react';

import renderApp from '../../helpers/tests/AppProvider';

import Header from './Header';

describe('Header', () => {
  test('render init snapshot', () => {
    const { container } = renderApp(<Header></Header>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdfBQB iKYVx"
        />
      </div>
    `);
  });

  test('render children element when string', () => {
    const getByText = 'CHILDREN_ELEMENT';
    const childrenElement = 'CHILDREN_ELEMENT';
    renderApp(<Header>{childrenElement}</Header>);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.getByText(getByText)).toBeInTheDocument();
  });

  test('render children element when ReactElement', () => {
    const getByText = 'CHILDREN_ELEMENT';
    const childrenElement = <div>{'CHILDREN_ELEMENT'}</div>;
    renderApp(<Header>{childrenElement}</Header>);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.getByText(getByText)).toBeInTheDocument();
  });

  test('render children element when ReactElement array', () => {
    const getByText = 'CHILDREN_ELEMENT';
    const childrenElement = [
      <div key={1}>{'CHILDREN_ELEMENT'}</div>,
      <div key={2}>{'OTHER_CHILDREN_ELEMENT'}</div>,
    ];
    renderApp(<Header>{childrenElement}</Header>);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.getByText(getByText)).toBeInTheDocument();
  });
});
