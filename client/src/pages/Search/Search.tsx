import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

import { Header, Logo, Content, Searcher, Footer } from "../../components";

import config from "../../config";

import { createShort } from "../../actions";

import { RootState } from "../../reducers";

const HomeHelmet = () => {
  const intl = useIntl();
  return (
    <Helmet>
      <title>
        {intl.formatMessage({ id: "PAGE_TITLE_SEARCH" })} | {config.name}
      </title>
    </Helmet>
  );
};

const Search = () => {
  const intl = useIntl();

  const { status } = useSelector((state: RootState) => state.createShort);
  const dispatch = useDispatch();

  return (
    <>
      <HomeHelmet />
      <Header>
        <>
          <Logo>{config.name}</Logo>
          {" | "}
          {intl.formatMessage({ id: "PAGE_TITLE_SEARCH" })}
        </>
      </Header>
      <Content>
        <Searcher
          loading={status === "pending" ? true : false}
          title={intl.formatMessage(
            { id: "HOME_SEARCHER_TITLE" },
            { name: config.name }
          )}
          onSubmit={({ address, slug }) =>
            dispatch(createShort({ address, slug }))
          }
        />
      </Content>
      <Footer>
        {intl.formatMessage(
          {
            id: "PAGE_COPYRIGHT",
          },
          { company: config.copyright.company, date: config.copyright.date }
        )}
      </Footer>
    </>
  );
};

export default Search;
