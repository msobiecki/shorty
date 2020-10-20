import React from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as RouterProvider,
  Redirect,
  Switch,
} from "react-router-dom";
import { IntlProvider } from "react-intl";

import config from "./config";
import routes from "./routes";
import intlMessages from "./lang";

type AppProviderProps = {
  children: JSX.Element;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <IntlProvider messages={intlMessages[config.lang]} locale={config.lang}>
      <HelmetProvider>
        <RouterProvider>{children}</RouterProvider>
      </HelmetProvider>
    </IntlProvider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Switch>
        {routes.map(({ component: Route, ...rest }, i) => (
          <Route key={i} {...rest} />
        ))}
        <Redirect to={"/"} />
      </Switch>
    </AppProvider>
  );
};

export default App;
