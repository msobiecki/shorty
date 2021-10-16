import { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { Searcher, List } from '../../components';

import config from '../../config';

import { searchShort } from '../../actions';

import { RootState } from '../../reducers';

import { Default as DefaultLayout } from '../../layouts';
import { Grid } from '@material-ui/core';

const Search = (): ReactElement => {
  const intl = useIntl();

  const { status } = useSelector((state: RootState) => state.searchShort);
  const { shorts } = useSelector((state: RootState) => state.latestShorts);
  const dispatch = useDispatch();

  return (
    <DefaultLayout title={intl.formatMessage({ id: 'PAGE_TITLE_SEARCH' })}>
      <Grid container spacing={0}>
        <Grid container item xs={12} md={6} spacing={0}>
          <Searcher
            loading={
              status === 'pending' || status === 'success' ? true : false
            }
            title={intl.formatMessage(
              { id: 'SEARCH_SEARCHER_TITLE' },
              { name: config.name?.toLowerCase() }
            )}
            onSubmit={({ slug }) => {
              dispatch(searchShort({ slug }));
            }}
          />
        </Grid>
        <Grid container item xs={12} md={6} spacing={0}>
          <List
            items={[
              ...shorts.reverse().map(({ slug, address, createdAt }) => ({
                primary: slug,
                secondary: `${address} | ${moment.unix(createdAt).fromNow()}`,
                button: intl.formatMessage({ id: 'ACTION_GO_TO' }),
                onClick: () => {
                  window.location.href = address;
                },
              })),
            ]}
          />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Search;
