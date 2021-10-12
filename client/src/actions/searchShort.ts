import { throwNotification } from './helpers/throwNotification';

import {
  SEARCH_SHORT_REQUEST,
  SEARCH_SHORT_RECEIVE,
  SEARCH_SHORT_ERROR,
} from '../reducers/searchShort';

import config from '../config';

type SearchShortProps = { slug?: string };
export const searchShort =
  ({ slug }: SearchShortProps) =>
  async (dispatch: any) => {
    if (slug) {
      dispatch({ type: SEARCH_SHORT_REQUEST, payload: { status: 'pending' } });
      return await fetch(`${config.api}/shorty/${slug}`, {
        method: 'GET',
        redirect: 'manual',
      })
        .then((response) => {
          console.log(response.redirected, response.status);
          if (response.status === 0) window.location.replace(response.url);
          else if (response.status === 404)
            throw new Error('NOTIFICATION_SEARCH_SHORT_NOT_FOUND');
          else if (response.redirected) {
            console.log('redirect?');
            window.location.href = response.url;
          } else if (response.ok) {
            return response.json();
          } else throw new Error('NOTIFICATION_SEARCH_SHORT_REQUEST_ERROR');
        })
        .then(() => {
          dispatch({
            type: SEARCH_SHORT_RECEIVE,
            payload: { status: 'success' },
          });
          return true;
        })
        .catch((err) => {
          dispatch(
            throwNotification({ status: 'error', message: err.message })
          );
          dispatch({ type: SEARCH_SHORT_ERROR, payload: { status: 'error' } });
          return false;
        });
    } else {
      dispatch(
        throwNotification({
          status: 'warning',
          message: 'NOTIFICATION_SEARCH_SHORT_EMPTY_FIELD',
        })
      );
    }
    return false;
  };
