import renderApp from '../../helpers/tests/AppProvider';

import Menu from './Menu';

describe('Menu', () => {
  test('render init snapshot', () => {
    const { container } = renderApp(<Menu></Menu>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-1 sc-bdfBQB gcmvDb"
        >
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-text sc-gsTEea"
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
            class="MuiButtonBase-root MuiButton-root MuiButton-text sc-gsTEea"
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
    `);
  });
});
