import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

const HomeHelmet = () => {
  const intl = useIntl();
  return (
    <Helmet>
      <title>
        {intl.formatMessage({ id: "PAGE_TITLE_HOME" })} |{" "}
        {process.env.REACT_APP_PROJECT_NAME}
      </title>
    </Helmet>
  );
};

const Home = () => {
  return (
    <>
      <HomeHelmet />
    </>
  );
};

export default Home;
