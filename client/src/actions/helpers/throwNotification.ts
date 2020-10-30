import { THROW_NOTIFICATION } from "../../reducers/notifications";

type ThrowNotificationProps = { status?: string, message?: string };

export const throwNotification = ({ status = "default", message }: ThrowNotificationProps) => {
  return {
    type: THROW_NOTIFICATION,
    payload: { status, message: message && message.replaceAll(" ", "_").toUpperCase() },
  };
};
