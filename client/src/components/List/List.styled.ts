import styled from 'styled-components';

import {
  Box as BoxMUI,
  List as ListBoxMUI,
  ListItem as ListItemMUI,
  ListItemText as ListItemTextMUI,
  ListItemSecondaryAction as ListItemSecondaryActionMUI,
  Button as ButtonMUI,
} from '@material-ui/core';

export const Wrapper = styled(BoxMUI)`
  display: block;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(0, 1, 0, 1)}`};
  cursor: default;
`;

export const ListBox = styled(ListBoxMUI)``;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ListItem: any = styled(ListItemMUI)``;

export const ListItemText = styled(ListItemTextMUI)``;

export const ListItemSecondaryAction = styled(ListItemSecondaryActionMUI)``;

export const Button = styled(ButtonMUI)``;
