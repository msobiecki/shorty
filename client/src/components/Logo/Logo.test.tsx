import { screen } from '@testing-library/react';

import renderApp from '../../helpers/tests/AppProvider';

import Logo from './Logo';

describe('Logo', () => {
  test('render init snapshot', () => {
    const { container } = renderApp(<Logo></Logo>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdfBQB gcmvDb"
        >
          <a
            class="sc-gsTEea hSALJC"
            href="/"
            title="Go to homepage"
          >
            <p
              class="MuiTypography-root sc-dlfnuX MuiTypography-body1"
            />
          </a>
        </div>
      </div>
    `);
  });

  test('render children element when string', () => {
    const childrenElement = 'TEST_PRIMARY';
    renderApp(<Logo>{childrenElement}</Logo>);

    expect(screen.getByText(childrenElement)).toBeInTheDocument();
  });
});
