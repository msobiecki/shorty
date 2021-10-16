import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';

import { HelmetProvider } from 'react-helmet-async';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { MemoryRouter as RouterProvider } from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import config from '../../config';
import lang from '../../lang';
import theme from '../../theme';
import { store, persistor } from '../../store';

type AppProviderProp = ReactElement | ReactElement[] | string;

const AppProvider = (Component: AppProviderProp): RenderResult =>
  render(
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme[config.theme]}>
        <ThemeProvider theme={theme[config.theme]}>
          <StoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <IntlProvider messages={lang[config.lang]} locale={config.lang}>
                <HelmetProvider>
                  <RouterProvider>{Component}</RouterProvider>
                </HelmetProvider>
              </IntlProvider>
            </PersistGate>
          </StoreProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );

export default AppProvider;
