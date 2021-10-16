import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { searchShort } from './searchShort';
import {
  SEARCH_SHORT_REQUEST,
  SEARCH_SHORT_RECEIVE,
  SEARCH_SHORT_ERROR,
} from '../reducers/searchShort';
import { THROW_NOTIFICATION } from '../reducers/notifications';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Search Short Action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('create short success on found', () => {
    fetchMock.getOnce('path:/api/shorty/TEST_SLUG', {
      status: 200,
      body: { status: 'success' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: SEARCH_SHORT_REQUEST, payload: { status: 'pending' } },
      { type: SEARCH_SHORT_RECEIVE, payload: { status: 'success' } },
    ];
    const store = mockStore({ shorts: [] });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return store.dispatch<any>(searchShort({ slug: 'TEST_SLUG' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('create short warning', () => {
    const expectedActions = [
      {
        type: THROW_NOTIFICATION,
        payload: {
          status: 'warning',
          message: 'NOTIFICATION_SEARCH_SHORT_EMPTY_FIELD',
        },
      },
    ];
    const store = mockStore({ shorts: [] });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return store.dispatch<any>(searchShort({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('create short error on not found', () => {
    fetchMock.getOnce('path:/api/shorty/TEST_SLUG', {
      status: 404,
      body: { status: 'error' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: SEARCH_SHORT_REQUEST, payload: { status: 'pending' } },
      {
        type: THROW_NOTIFICATION,
        payload: {
          status: 'error',
          message: 'NOTIFICATION_SEARCH_SHORT_NOT_FOUND',
        },
      },
      { type: SEARCH_SHORT_ERROR, payload: { status: 'error' } },
    ];
    const store = mockStore({ shorts: [] });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return store.dispatch<any>(searchShort({ slug: 'TEST_SLUG' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('create short error', () => {
    fetchMock.getOnce('path:/api/shorty/TEST_SLUG', {
      status: 400,
      body: { status: 'error' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: SEARCH_SHORT_REQUEST, payload: { status: 'pending' } },
      {
        type: THROW_NOTIFICATION,
        payload: {
          status: 'error',
          message: 'NOTIFICATION_SEARCH_SHORT_REQUEST_ERROR',
        },
      },
      { type: SEARCH_SHORT_ERROR, payload: { status: 'error' } },
    ];
    const store = mockStore({ shorts: [] });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return store.dispatch<any>(searchShort({ slug: 'TEST_SLUG' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
