import { combineReducers } from "redux";

import { notificationsReducer } from "./notifications";
import { createShortReducer } from "./createShort";

const reducers = combineReducers({
  notifications: notificationsReducer,
  createShort: createShortReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
