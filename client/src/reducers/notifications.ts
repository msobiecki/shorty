export const THROW_NOTIFICATION = 'THROW_NOTIFICATION';

type NotificationsState = {
  messages: NotificationType[];
};

type NotificationActionType = {
  type?: string;
  payload?: NotificationType;
};

type NotificationType = {
  status: 'info' | 'success' | 'warning' | 'error' | 'default';
  message: string;
};

const initialState: NotificationsState = {
  messages: [],
};

export function notificationsReducer(
  state = initialState,
  action: NotificationActionType
): NotificationsState {
  switch (action.type) {
    case THROW_NOTIFICATION: {
      const newMessages = (state.messages && [...state.messages]) || [];
      if (action.payload) newMessages.push(action.payload);
      return {
        ...state,
        messages: newMessages,
      };
    }
    default:
      return state;
  }
}
