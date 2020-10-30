import React from "react";
import { useIntl } from "react-intl";

import { Wrapper, Link, Title } from "./Logo.styled";

type LogoProps = {
  children?: string;
};

const Logo = ({ children }: LogoProps) => {
  const intl = useIntl();
  return (
    <Wrapper>
      <Link to="/" title={intl.formatMessage({id: "LOGO_LINK_TITLE"})}>
        <Title>{children}</Title>
      </Link>
    </Wrapper>
  );
};

export default Logo;
