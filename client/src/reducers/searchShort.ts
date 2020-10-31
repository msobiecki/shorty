export const SEARCH_SHORT_REQUEST = "SEARCH_SHORT_REQUEST";
export const SEARCH_SHORT_RECEIVE = "SEARCH_SHORT_RECEIVE";
export const SEARCH_SHORT_ERROR = "SEARCH_SHORT_ERROR";

type SearchShortState = {
  status: string;
};

type SearchShortActionType = {
  type?: string;
  payload?: SearchShortType;
};

type SearchShortType = {
  status: string;
};

const initialState: SearchShortState = {
  status: "idle",
};

export function searchShortReducer(
  state = initialState,
  action: SearchShortActionType
): SearchShortState {
  switch (action.type) {
    case SEARCH_SHORT_REQUEST: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SEARCH_SHORT_RECEIVE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SEARCH_SHORT_ERROR: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
