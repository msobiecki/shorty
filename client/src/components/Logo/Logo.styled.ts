import styled from "styled-components";

import { Box as BoxMUI, Typography as TypographyMUI } from "@material-ui/core";

export const Wrapper = styled(BoxMUI)`
  display: inline-flex;
  padding: ${({ theme }) => `${theme.spacing(0, 1, 0, 1)}`};
  cursor: default;
`;

export const Title = styled(TypographyMUI)``;
