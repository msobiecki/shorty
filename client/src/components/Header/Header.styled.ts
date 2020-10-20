import styled from "styled-components";

import { Box as BoxMUI } from "@material-ui/core";

export const Wrapper = styled(BoxMUI)`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: ${({ theme }) => `${theme.spacing(2, 3, 2, 3)}`};
  border-bottom: 1px solid #fafafa;
  background-color: #fff;
  cursor: default;
`;
