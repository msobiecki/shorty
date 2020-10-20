import React from "react";

import { Wrapper } from "./Header.styled";

type HeaderProps = {
  children?: JSX.Element | JSX.Element[] | string;
};

const Header = ({ children }: HeaderProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Header;
