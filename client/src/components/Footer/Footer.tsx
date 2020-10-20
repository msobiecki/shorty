import React from "react";

import { Wrapper, Text } from "./Footer.styled";

type FooterProps = {
  children?: string;
};

const Footer = ({ children }: FooterProps) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Footer;
