import {ADD_LATEST_SHORT, latestShortsReducer as reducer} from './latestShorts';

describe('latest shorts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
       shorts: []
      }
    )
  })

  it('should handle ADD_LATEST_SHORT', () => {
    expect(
      reducer({shorts: []}, {
        type: ADD_LATEST_SHORT,
        payload: {address: 'TEST_ADDERS', slug: 'TEST_SLUG', createdAt: 123}
      })
    ).toEqual(
      {
        shorts: [{address: 'TEST_ADDERS', slug: 'TEST_SLUG', createdAt: 123}],
      }
    )
  })
})