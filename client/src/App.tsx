import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import {
  BrowserRouter as RouterProvider,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { IntlProvider } from "react-intl";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider, MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import config from "./config";
import routes from "./routes";
import lang from "./lang";
import theme from "./theme";
import { store, persistor } from "./store";

import { Notifications } from "./components";

type AppProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme[config.theme]}>
        <ThemeProvider theme={theme[config.theme]}>
          <StoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <IntlProvider messages={lang[config.lang]} locale={config.lang}>
                <HelmetProvider>
                  <RouterProvider>{children}</RouterProvider>
                </HelmetProvider>
              </IntlProvider>
            </PersistGate>
          </StoreProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <CssBaseline />
      <Switch>
        {routes.map(({ component: Page, ...options }, i) => (
          <Route key={i} {...options}>
            <Page />
          </Route>
        ))}
        <Redirect to={"/"} />
      </Switch>
      <Notifications />
    </AppProvider>
  );
};

export default App;
