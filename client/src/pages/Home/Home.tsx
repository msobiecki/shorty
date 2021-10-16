import { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';

import { Creator } from '../../components';

import config from '../../config';

import { createShort } from '../../actions';

import { RootState } from '../../reducers';

import { Default as DefaultLayout } from '../../layouts';
import { useHistory } from 'react-router-dom';

const Home = (): ReactElement => {
  const intl = useIntl();
  const history = useHistory();

  const { status } = useSelector((state: RootState) => state.createShort);
  const dispatch = useDispatch();

  return (
    <DefaultLayout title={intl.formatMessage({ id: 'PAGE_TITLE_HOME' })}>
      <Creator
        loading={status === 'pending' ? true : false}
        title={intl.formatMessage(
          { id: 'HOME_CREATOR_TITLE' },
          { name: config.name }
        )}
        onSubmit={async ({ address, slug }) => {
          if (await dispatch(createShort({ address, slug })))
            history.push('/search');
        }}
      />
    </DefaultLayout>
  );
};

export default Home;
