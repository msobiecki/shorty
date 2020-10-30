import moment from "moment";

import { throwNotification } from "./throwNotification";

import { ADD_LATEST_SHORT } from "../reducers/latestShorts";
import {
  CREATE_SHORT_REQUEST,
  CREATE_SHORT_RECEIVE,
  CREATE_SHORT_ERROR,
} from "../reducers/createShort";

import config from "../config";

type CreateShortProps = { address?: string; slug?: string };
export const createShort = ({ address, slug }: CreateShortProps) => (
  dispatch: any
) => {
  if (address && slug) {
    dispatch({ type: CREATE_SHORT_REQUEST, payload: { status: "pending" } });
    fetch(`${config.api}/shorty/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, slug }),
    })
      .then((response) => {
        if (response.ok) response.json();
        else throw new Error("NOTIFICATION_CREATE_SHORT_REQUEST_ERROR");
      })
      .then(() => {
        dispatch({
          type: ADD_LATEST_SHORT,
          payload: { createdAt: moment().unix(), address, slug },
        });
        dispatch(throwNotification({ status: "success", message: "NOTIFICATION_CREATE_SHORT_CREATED"  }));
        dispatch({
          type: CREATE_SHORT_RECEIVE,
          payload: { status: "success" },
        });
      })
      .catch((err) => {
        dispatch(throwNotification({ status: "error", message: err.message }));
        dispatch({ type: CREATE_SHORT_ERROR, payload: { status: "error" } });
      });
  } else
    dispatch(
      throwNotification({
        status: "warning",
        message: "NOTIFICATION_CREATE_SHORT_EMPTY_FIELD",
      })
    );
};
