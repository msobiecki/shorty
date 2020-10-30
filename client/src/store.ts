import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const persistConfig = {
  key: 'store',
  storage,
  whitelist: ['latestShorts']
}

const middleware =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
    ? compose(applyMiddleware(thunkMiddleware))
    : composeWithDevTools(
        compose(applyMiddleware(thunkMiddleware, createLogger()))
      );

export const store = createStore(persistReducer(persistConfig, reducers), middleware);
// @ts-ignore TOOD: https://github.com/rt2zz/redux-persist/pull/1085
export const persistor = persistStore(store)
