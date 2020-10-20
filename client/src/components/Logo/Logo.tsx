import React from "react";

import { Typography } from "@material-ui/core";

import { Wrapper } from "./Logo.styled";

type LogoProps = {
  children?: string;
};

const Logo = ({ children }: LogoProps) => {
  return (
    <Wrapper>
      <Typography component="h1">{children}</Typography>
    </Wrapper>
  );
};

export default Logo;
