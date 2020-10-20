import { THROW_NOTIFICATION } from "../reducers/notifications";

type ThrowNotificationProps = { message?: string };

export const throwNotification = ({ message }: ThrowNotificationProps) => {
  return {
    type: THROW_NOTIFICATION,
    payload: { message },
  };
};
