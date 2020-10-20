import { throwNotification } from "./throwNotification";

import {
  SEARCH_SHORT_REQUEST,
  SEARCH_SHORT_RECEIVE,
  SEARCH_SHORT_ERROR,
} from "../reducers/searchShort";

import config from "../config";

type SearchShortProps = { slug?: string };
export const searchShort = ({ slug }: SearchShortProps) => (dispatch: any) => {
  if (slug) {
    dispatch({ type: SEARCH_SHORT_REQUEST, payload: { status: "pending" } });
    fetch(`${config.api}/shorty/${slug}`, {
      method: "GET",
      redirect: "manual",
    })
      .then((response) => {
        if (response.status === 0) window.location.replace(response.url);
        else if (response.status === 404)
          throw new Error("NOTIFICATION_SEARCH_SHORT_NOT_FOUND");
        else if (response.redirected) {
          window.location.href = response.url;
        } else throw new Error("NOTIFICATION_SEARCH_SHORT_REQUEST_ERROR");
      })
      .then(() => {
        dispatch({
          type: SEARCH_SHORT_RECEIVE,
          payload: { status: "success" },
        });
      })
      .catch((err) => {
        dispatch(throwNotification({ message: err.message }));
        dispatch({ type: SEARCH_SHORT_ERROR, payload: { status: "error" } });
      });
  } else
    dispatch(
      throwNotification({
        message: "NOTIFICATION_SEARCH_SHORT_EMPTY_FIELD",
      })
    );
};
