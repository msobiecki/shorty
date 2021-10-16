import {
  CREATE_SHORT_REQUEST,
  CREATE_SHORT_RECEIVE,
  CREATE_SHORT_ERROR,
  createShortReducer as reducer,
} from './createShort';

describe('latest shorts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      status: 'idle',
    });
  });

  it('should handle CREATE_SHORT_REQUEST', () => {
    expect(
      reducer(
        { status: 'idle' },
        {
          type: CREATE_SHORT_REQUEST,
          payload: { status: 'pending' },
        }
      )
    ).toEqual({ status: 'pending' });
  });

  it('should handle CREATE_SHORT_RECEIVE', () => {
    expect(
      reducer(
        { status: 'idle' },
        {
          type: CREATE_SHORT_RECEIVE,
          payload: { status: 'success' },
        }
      )
    ).toEqual({ status: 'success' });
  });

  it('should handle CREATE_SHORT_ERROR', () => {
    expect(
      reducer(
        { status: 'idle' },
        {
          type: CREATE_SHORT_ERROR,
          payload: { status: 'error' },
        }
      )
    ).toEqual({ status: 'error' });
  });
});
