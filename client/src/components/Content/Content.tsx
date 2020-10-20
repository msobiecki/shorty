import React from "react";

import { Wrapper } from "./Content.styled";

type ContentProps = {
  children?: JSX.Element | JSX.Element[];
};

const Content = ({ children }: ContentProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;
