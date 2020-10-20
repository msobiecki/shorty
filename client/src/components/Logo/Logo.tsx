import React from "react";

import { Wrapper, Title } from "./Logo.styled";

type LogoProps = {
  children?: string;
};

const Logo = ({ children }: LogoProps) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
};

export default Logo;
