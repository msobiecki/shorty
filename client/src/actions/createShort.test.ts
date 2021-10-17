import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { createShort } from './createShort';
import {
  CREATE_SHORT_REQUEST,
  CREATE_SHORT_RECEIVE,
  CREATE_SHORT_ERROR,
} from '../reducers/createShort';
import { ADD_LATEST_SHORT } from '../reducers/latestShorts';
import { THROW_NOTIFICATION } from '../reducers/notifications';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('moment', () => () => ({ unix: () => '2018–01–30T12:34:56+00:00' }));

describe('Create Short Action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('create short success', () => {
    fetchMock.post('path:/api/shorty/', {
      body: { status: 'success' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: CREATE_SHORT_REQUEST, payload: { status: 'pending' } },
      {
        type: ADD_LATEST_SHORT,
        payload: {
          slug: 'TEST_SLUG',
          address: 'TEST_ADDRESS',
          createdAt: '2018–01–30T12:34:56+00:00',
        },
      },
      {
        type: THROW_NOTIFICATION,
        payload: {
          status: 'success',
          message: 'NOTIFICATION_CREATE_SHORT_CREATED',
        },
      },
      { type: CREATE_SHORT_RECEIVE, payload: { status: 'success' } },
    ];
    const store = mockStore({ shorts: [] });

    return (
      store
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .dispatch<any>(
          createShort({ slug: 'TEST_SLUG', address: 'TEST_ADDRESS' })
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    );
  });

  test('create short warning', () => {
    const expectedActions = [
      {
        type: THROW_NOTIFICATION,
        payload: {
          status: 'warning',
          message: 'NOTIFICATION_CREATE_SHORT_EMPTY_FIELD',
        },
      },
    ];
    const store = mockStore({ shorts: [] });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return store.dispatch<any>(createShort({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('create short error', () => {
    fetchMock.post('path:/api/shorty/', {
      status: 400,
      body: { status: 'error' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: CREATE_SHORT_REQUEST, payload: { status: 'pending' } },
      {
        type: THROW_NOTIFICATION,
        payload: {
          status: 'error',
          message: 'NOTIFICATION_CREATE_SHORT_REQUEST_ERROR',
        },
      },
      { type: CREATE_SHORT_ERROR, payload: { status: 'error' } },
    ];
    const store = mockStore({ shorts: [] });

    return (
      store
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .dispatch<any>(
          createShort({ slug: 'TEST_SLUG', address: 'TEST_ADDRESS' })
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    );
  });
});
