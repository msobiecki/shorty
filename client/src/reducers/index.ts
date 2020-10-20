import { combineReducers } from "redux";

import { notificationsReducer } from "./notifications";
import { latestShortsReducer } from "./latestShorts";
import { createShortReducer } from "./createShort";
import { searchShortReducer } from "./searchShort";

const reducers = combineReducers({
  notifications: notificationsReducer,
  latestShorts: latestShortsReducer,
  createShort: createShortReducer,
  searchShort: searchShortReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
