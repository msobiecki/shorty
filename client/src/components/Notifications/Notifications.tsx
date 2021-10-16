import { useEffect, ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RootState } from '../../reducers';

const Notifications = (): ReactElement => {
  const intl = useIntl();
  const { messages } = useSelector((state: RootState) => state.notifications);

  useEffect(
    () => {
      const message = messages.shift();
      if (message)
        toast(intl.formatMessage({ id: message.message }), {
          type: message.status,
        });
    },
    // eslint-disable-next-line
    [messages]
  );

  return (
    <>
      <ToastContainer hideProgressBar />
    </>
  );
};

export default Notifications;
