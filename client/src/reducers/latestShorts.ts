export const ADD_LATEST_SHORT = "ADD_LATEST_SHORT";

type LatestShortsState = {
  shorts: LatestShortType[];
};

type LatestShortsActionType = {
  type: string;
  payload: LatestShortType;
};

type LatestShortType = {
  address: string;
  slug: string;
  createdAt: number
};

const initialState: LatestShortsState = {
  shorts: [],
};

export function latestShortsReducer(
  state = initialState,
  action: LatestShortsActionType
): LatestShortsState {
  switch (action.type) {
    case ADD_LATEST_SHORT: {
      return {
        ...state,
        shorts: [...state.shorts.slice(-5), action.payload],
      };
    }
    default:
      return state;
  }
}
