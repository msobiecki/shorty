import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const loggerMiddleware = createLogger();

export const middleware =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(thunkMiddleware))
    : composeWithDevTools(
        compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
      );

export default createStore(reducers, middleware);
