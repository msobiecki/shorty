export const CREATE_SHORT_REQUEST = 'CREATE_SHORT_REQUEST';
export const CREATE_SHORT_RECEIVE = 'CREATE_SHORT_RECEIVE';
export const CREATE_SHORT_ERROR = 'CREATE_SHORT_ERROR';

type CreateShortState = {
  status: string;
};

type CreateShortActionType = {
  type?: string;
  payload?: CreateShortType;
};

type CreateShortType = {
  status: string;
};

const initialState: CreateShortState = {
  status: 'idle',
};

export function createShortReducer(
  state = initialState,
  action: CreateShortActionType
): CreateShortState {
  switch (action.type) {
    case CREATE_SHORT_REQUEST: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case CREATE_SHORT_RECEIVE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case CREATE_SHORT_ERROR: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
