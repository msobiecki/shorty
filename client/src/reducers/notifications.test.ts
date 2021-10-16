import {
  THROW_NOTIFICATION,
  notificationsReducer as reducer,
} from './notifications';

describe('notifications reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      messages: [],
    });
  });

  it('should handle THROW_NOTIFICATION default', () => {
    expect(
      reducer(
        {
          messages: [],
        },
        {
          type: THROW_NOTIFICATION,
          payload: { status: 'default', message: 'TEST_SLUG' },
        }
      )
    ).toEqual({
      messages: [{ status: 'default', message: 'TEST_SLUG' }],
    });
  });

  it('should handle THROW_NOTIFICATION info', () => {
    expect(
      reducer(
        {
          messages: [],
        },
        {
          type: THROW_NOTIFICATION,
          payload: { status: 'info', message: 'TEST_SLUG' },
        }
      )
    ).toEqual({
      messages: [{ status: 'info', message: 'TEST_SLUG' }],
    });
  });

  it('should handle THROW_NOTIFICATION success', () => {
    expect(
      reducer(
        {
          messages: [],
        },
        {
          type: THROW_NOTIFICATION,
          payload: { status: 'success', message: 'TEST_SLUG' },
        }
      )
    ).toEqual({
      messages: [{ status: 'success', message: 'TEST_SLUG' }],
    });
  });

  it('should handle THROW_NOTIFICATION warning', () => {
    expect(
      reducer(
        {
          messages: [],
        },
        {
          type: THROW_NOTIFICATION,
          payload: { status: 'warning', message: 'TEST_SLUG' },
        }
      )
    ).toEqual({
      messages: [{ status: 'warning', message: 'TEST_SLUG' }],
    });
  });

  it('should handle THROW_NOTIFICATION error', () => {
    expect(
      reducer(
        {
          messages: [],
        },
        {
          type: THROW_NOTIFICATION,
          payload: { status: 'error', message: 'TEST_SLUG' },
        }
      )
    ).toEqual({
      messages: [{ status: 'error', message: 'TEST_SLUG' }],
    });
  });
});
