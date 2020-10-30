import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

import { Header, Logo, Menu, Content, Footer } from "../../components";

import config from "../../config";
import { Grow } from "./Default.styled";

type DefaultHelmetProps = { 
  title?: string; 
}

const DefaultHelmet = ({ title } : DefaultHelmetProps) => {
  const intl = useIntl();
  return (
    <Helmet>
      <title>
        {intl.formatMessage({ id: "PAGE_TITLE" }, {title})} | {config.name}
      </title>
    </Helmet>
  );
};

type DefaultProps = { 
  title: string; 
  children?: JSX.Element | JSX.Element[];
}

const Default = ({ title, children } : DefaultProps) => {
  const intl = useIntl();

  return (
    <>
      <DefaultHelmet title={title} />
      <Header>
        <>
          <Logo>{config.name}</Logo>
          {" | "}
          {intl.formatMessage({ id: "PAGE_TITLE" }, {title})}
          <Grow />
          <Menu />
        </>
      </Header>
      <Content>
        {children}
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

export default Default;
