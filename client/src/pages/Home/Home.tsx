import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

import { Header, Logo, Menu, Content, Creator, Footer } from "../../components";

import config from "../../config";

import { createShort } from "../../actions";

import { RootState } from "../../reducers";

const HomeHelmet = () => {
  const intl = useIntl();
  return (
    <Helmet>
      <title>
        {intl.formatMessage({ id: "PAGE_TITLE_HOME" })} | {config.name}
      </title>
    </Helmet>
  );
};

const Home = () => {
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
          {intl.formatMessage({ id: "PAGE_TITLE_HOME" })}
          <Menu />
        </>
      </Header>
      <Content>
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

export default Home;
