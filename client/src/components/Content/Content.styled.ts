import styled from 'styled-components';

import { Box as BoxMUI } from '@material-ui/core';

export const Wrapper = styled(BoxMUI)`
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => `${theme.palette.background.default}`};
  padding-top: 60px;
  padding-bottom: 60px;
`;
