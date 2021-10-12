import '@testing-library/jest-dom';

import React from 'react';
import { screen } from '@testing-library/react';
import renderApp from '../../helpers/tests/AppProvider';

import Footer from './Footer';

describe('Footer', () => {
  test('render init snapshot', () => {
    const { container } = renderApp(<Footer></Footer>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdfBQB VMVHf"
        >
          <p
            class="MuiTypography-root sc-gsTEea kIBePV MuiTypography-body1"
          />
        </div>
      </div>
    `);
  });

  test('render children element when string', () => {
    const getByText = 'CHILDREN_ELEMENT';
    const childrenElement = 'CHILDREN_ELEMENT';
    renderApp(<Footer>{childrenElement}</Footer>);

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.getByText(getByText)).toBeInTheDocument();
  });
});
