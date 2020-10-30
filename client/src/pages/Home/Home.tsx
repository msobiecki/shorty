import React from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

import { Creator } from "../../components";

import config from "../../config";

import { createShort } from "../../actions";

import { RootState } from "../../reducers";

import { Default as DefaultLayout } from "../../layouts";

const Home = () => {
  const intl = useIntl();

  const { status } = useSelector((state: RootState) => state.createShort);
  const dispatch = useDispatch();

  return (
    <DefaultLayout title={intl.formatMessage({id: 'PAGE_TITLE_HOME'})}>
      <Creator
        loading={status === "pending" ? true : false}
        title={intl.formatMessage(
          { id: "HOME_CREATOR_TITLE" },
          { name: config.name }
        )}
        onSubmit={({ address, slug }) =>
          dispatch(createShort({ address, slug }))
        }
      />
    </DefaultLayout>
  );
};

export default Home;
