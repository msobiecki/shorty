import styled from "styled-components";

import { Box as BoxMUI, Typography as TypographyMUI } from "@material-ui/core";

export const Wrapper = styled(BoxMUI)`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: ${({ theme }) => `${theme.spacing(2, 3, 2, 3)}`};
  border-top: 1px solid #fafafa;
  background-color: #fff;
`;

export const Text = styled(TypographyMUI)`
  text-align: center;
  cursor: default;
`;
