import styled from 'styled-components';

import { Box as BoxMUI } from '@material-ui/core';

export const Wrapper = styled(BoxMUI)`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: ${({ theme }) => `${theme.spacing(2, 3, 2, 3)}`};
  border-bottom: 1px solid ${({ theme }) => `${theme.palette.divider}`};
  background-color: ${({ theme }) => `${theme.palette.background.default}`};
  cursor: default;
`;
