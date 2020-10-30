import React from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

import {Searcher } from "../../components";

import config from "../../config";

import { searchShort } from "../../actions";

import { RootState } from "../../reducers";

import { Default as DefaultLayout } from "../../layouts";

const Search = () => {
  const intl = useIntl();

  const { status } = useSelector((state: RootState) => state.searchShort);
  const dispatch = useDispatch();

  return (
    <DefaultLayout title={intl.formatMessage({id: 'PAGE_TITLE_SEARCH'})}>
      <Searcher
        loading={status === "pending" || status === "success" ? true : false}
        title={intl.formatMessage(
          { id: "SEARCH_SEARCHER_TITLE" },
          { name: config.name?.toLowerCase() }
        )}
        onSubmit={({ slug }) => dispatch(searchShort({ slug }))}
      />
    </DefaultLayout>
  );
};

export default Search;
