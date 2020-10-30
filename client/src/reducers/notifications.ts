export const THROW_NOTIFICATION = "THROW_NOTIFICATION";

type NotificationsState = {
  messages: NotificationType[];
};

type NotificationActionType = {
  type: string;
  payload: NotificationType;
};

type NotificationType = {
  status: "info" | "success" | "warning" | "error" | "default";
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
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    }
    default:
      return state;
  }
}
